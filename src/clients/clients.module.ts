import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientEntity } from './entities/client.entity';
import { ClientOrderEntity } from './entities/client.order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, ClientOrderEntity])],
  providers: [ClientsService],
  controllers: [ClientsController],
  exports: [ClientsService],
})
export class ClientsModule {}
