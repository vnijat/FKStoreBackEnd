import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, getRepository, Repository } from 'typeorm';
import { BarcodeEntity } from './barcode.entity';
import { AddBarcodeDto } from './dto/barcode.dto';

@Injectable()
export class BarCodeService {
  constructor(
    @InjectRepository(BarcodeEntity)
    private readonly barCodeRepository: Repository<BarcodeEntity>,
  ) {}
  async addBarcode(addBarcodeDto: AddBarcodeDto) {
    const isExist = await this.barCodeRepository.findOne({
      code: addBarcodeDto.code,
    });
    if (isExist) {
      throw new HttpException(
        ' this barcode allready exist',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const newBarcode = new BarcodeEntity();
    Object.assign(newBarcode, addBarcodeDto);

    return await this.barCodeRepository.save(newBarcode);
  }

  async getBarcodes() {
    return await this.barCodeRepository.find({ select: ['id', 'code'] });
  }

  async getbarcodeForInput() {
    return await this.barCodeRepository
      .createQueryBuilder()
      .select(['id AS id', 'code AS label'])
      .getRawMany();
  }

  async findByid(id: number) {
    const barCode = await this.barCodeRepository.findOne({ id });
    if (!barCode) {
      throw new HttpException(
        'there is no barCode with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return barCode;
  }
}
