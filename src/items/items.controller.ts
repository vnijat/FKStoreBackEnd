import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream, existsSync } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { generateFileName } from 'src/services';
import { AddItemDto } from './dto/addItem.dto';
import { EditItemDto } from './dto/editItem.dto';
import { QueryParamsDto } from './dto/queryParams.dto';
import { QueryResponseDto } from './dto/queryResponse.dto';
import { ItemEntity } from './item.entity';
import { ItemsServices } from './items.service';
import { ParseJsonPipe } from './pipes/parseJsonPipe';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsServices: ItemsServices) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getAll(
    @Query() query: QueryParamsDto,
  ): Promise<QueryResponseDto<ItemEntity>> {
    return await this.itemsServices.getAll(query);
  }

  @Get('inputs')
  async getInputs() {
    return await this.itemsServices.getInputs();
  }

  @Patch(':id')
  async editItem(
    @Body() editItemDto: EditItemDto,
    @Param('id') itemId: number,
  ) {
    return await this.itemsServices.editItem(itemId, editItemDto);
  }

  @Delete()
  async deleteMany(@Body('Ids') Ids: number[]) {
    return await this.itemsServices.deleteMany(Ids);
  }

  @Get('/photos/:name')
  async getPhoto(@Param('name') name: string, @Res() res: Response) {
    const isPhotoExist = existsSync(`photos/${name}`);
    if (isPhotoExist) {
      res.sendFile(name, { root: 'photos' });
    } else {
      throw new HttpException('Photo is not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  @UseInterceptors()
  // FileInterceptor('photo', {
  //   storage: diskStorage({
  //     destination: './photos',
  //     filename: generateFileName,
  //   }),
  // }),
  async addItem(
    @Body(new ValidationPipe())
    addItemDto: AddItemDto,
  ) {
    return await this.itemsServices.addItem(addItemDto);
  }
}
