import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarCodeController } from './barcode.controller';
import { BarcodeEntity } from './barcode.entity';
import { BarCodeService } from './barcode.service';

@Module({
  imports: [TypeOrmModule.forFeature([BarcodeEntity])],
  controllers: [BarCodeController],
  providers: [BarCodeService],
  exports: [BarCodeService],
})
export class BarCodeModule {}
