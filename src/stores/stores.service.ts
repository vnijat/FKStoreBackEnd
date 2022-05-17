import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddStoreDto } from './dto/addStore.dto';
import { StoreEntity } from './store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly storeRepositery: Repository<StoreEntity>,
  ) {}

  async addStore(addStoredto: AddStoreDto) {
    const newStore = new StoreEntity();
    Object.assign(newStore, addStoredto);
    return await this.storeRepositery.save(newStore);
  }

  async findByid(id: number) {
    const store = await this.storeRepositery.findOne({ id });
    if (!store) {
      throw new HttpException(
        'there is no store with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return store;
  }

  async getStores() {
    return await this.storeRepositery.find();
  }

  async getStoresForInput() {
    return await this.storeRepositery
      .createQueryBuilder()
      .select(['id AS id', 'name AS label'])
      .getRawMany();
  }
}
