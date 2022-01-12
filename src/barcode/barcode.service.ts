import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BarCodeEntity } from './barcode.entity';

@Injectable()
export class BarCodeServices {
  constructor(
    @InjectRepository(BarCodeEntity)
    private readonly barCodeRepository: Repository<BarCodeEntity>,
  ) {}
  async addBarcode() {}

  async getBarcodes() {
    return await this.barCodeRepository.find({ relations: ['items'] });
  }
}
