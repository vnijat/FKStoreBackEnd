import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarCodeModule } from './barcode/barcode.module';
import { ItemsModule } from './items/items.module';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), ItemsModule, BarCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
