import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddSupplierDto } from './dto/addSupplier.dto';
import { SupplierEntity } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private readonly supplierRepositery: Repository<SupplierEntity>,
  ) {}

  async getSuppliers() {
    return await this.supplierRepositery.find();
  }

  async getSuppliersForInput() {
    return await this.supplierRepositery
      .createQueryBuilder()
      .select(['id AS id', 'name AS label'])
      .getRawMany();
  }

  async addSupplier(addSuplierDto: AddSupplierDto) {
    const newSupplier = new SupplierEntity();
    Object.assign(newSupplier, addSuplierDto);
    return await this.supplierRepositery.save(newSupplier);
  }

  async findById(id: number) {
    const supplier = await this.supplierRepositery.findOne({ id });
    if (!supplier) {
      throw new HttpException(
        'there is no supplier with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return supplier;
  }
}
