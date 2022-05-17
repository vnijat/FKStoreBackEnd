import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddStoreDto } from './dto/addStore.dto';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  async addStore(@Body('store') addStoredto: AddStoreDto) {
    return await this.storesService.addStore(addStoredto);
  }

  @Get()
  async getStores() {
    return await this.storesService.getStores();
  }
}
