import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddUnitDto } from './dto/addUnit.dto';
import { UnitsService } from './units.service';

@Controller('unit')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  async addUnit(@Body('unit') addUnitdto: AddUnitDto) {
    return await this.unitsService.addUnit(addUnitdto);
  }

  @Get()
  async getUnits() {
    return await this.unitsService.getUnits();
  }
}
