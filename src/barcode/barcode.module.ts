import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarCodeController } from './barcode.controller';
import { BarCodeEntity } from './barcode.entity';
import { BarCodeServices } from './barcode.service';

@Module({
  imports: [TypeOrmModule.forFeature([BarCodeEntity])],
  controllers: [BarCodeController],
  providers: [BarCodeServices],
})
export class BarCodeModule {}
