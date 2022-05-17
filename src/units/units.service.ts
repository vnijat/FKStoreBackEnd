import {
  Controller,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUnitDto } from './dto/addUnit.dto';
import { UnitEntity } from './unit.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(UnitEntity)
    private readonly unitRepositery: Repository<UnitEntity>,
  ) {}

  async addUnit(addUnitdto: AddUnitDto) {
    const isUnitExist = await this.unitRepositery.findOne({
      name: addUnitdto.name,
    });
    if (isUnitExist) {
      throw new HttpException('Unit allready exist', HttpStatus.NOT_ACCEPTABLE);
    }
    const newUnit = new UnitEntity();
    Object.assign(newUnit, addUnitdto);
    return await this.unitRepositery.save(newUnit);
  }

  async getUnits() {
    const [units, count] = await this.unitRepositery.findAndCount();
    return units;
  }

  async findByid(id: number) {
    const unit = await this.unitRepositery.findOne({ id });
    if (!unit) {
      throw new HttpException(
        'there is not unit with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return unit;
  }

   async getUnitsForInput() {
    return await this.unitRepositery
      .createQueryBuilder()
      .select(['id AS id', 'name AS label'])
      .getRawMany();
  }



}
