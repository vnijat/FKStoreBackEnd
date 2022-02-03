import { Controller, Get } from '@nestjs/common';
import { ClientsServices } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsServices: ClientsServices) {}

  @Get()
  async getClients() {
    return this.clientsServices.getClients();
  }
}
