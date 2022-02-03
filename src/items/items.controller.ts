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
  Req,
  Res,
  StreamableFile,
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
import { ItemEntity } from './items.entity';
import { ItemsServices } from './items.service';
import { ParseJsonPipe } from './pipes/parseJsonPipe';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsServices: ItemsServices) {}

  @Get()
  async getAll(@Query() query: any) {
    return await this.itemsServices.getAll(query);
  }

  @Patch('edit')
  async editItem(@Body() item: AddItemDto) {
    return 'EDITING';
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
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './photos',
        filename: generateFileName,
      }),
    }),
  )
  async addItem(
    @UploadedFile() photo: Express.Multer.File,
    @Body('item', new ParseJsonPipe(), new ValidationPipe())
    addItemDto: AddItemDto,
  ) {
    return await this.itemsServices.addItem(addItemDto, photo?.filename);
    // return addItemDto.name;
  }
}
