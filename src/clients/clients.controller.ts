import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AddClientDto } from './dto/addClient.dto';
import { AddClientOrderDto } from './dto/clientOrder.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get()
  async getClients() {
    return await this.clientService.getClients();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addClient(@Body('client') addClientDto: AddClientDto) {
    return await this.clientService.addClient(addClientDto);
  }

  @Post('/order')
  async addClientOrder(
    @Body('clientOrder') addClientOrderDto: AddClientOrderDto,
  ) {
    return await this.clientService.addClientOrder(addClientOrderDto);
  }
}
