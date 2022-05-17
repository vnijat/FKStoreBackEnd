import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddClientDto } from './dto/addClient.dto';
import { AddClientOrderDto } from './dto/clientOrder.dto';
import { ClientEntity } from './entities/client.entity';
import { ClientOrderEntity } from './entities/client.order.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
    @InjectRepository(ClientOrderEntity)
    private readonly clientOrderRepositery: Repository<ClientOrderEntity>,
  ) {}

  async getClients() {
    return await this.clientRepository.find({ relations: ['orders'] });
  }

  async addClient(addClientDto: AddClientDto) {
    const newClient = new ClientEntity();
    Object.assign(newClient, addClientDto);
    return await this.clientRepository.save(newClient);
  }

  async addClientOrder(addClientOrderDto: AddClientOrderDto) {
    const client = await this.findByid(addClientOrderDto.clientId);
    const newOrder = new ClientOrderEntity();
    newOrder.client = client;
    Object.assign(newOrder, addClientOrderDto);
    return await this.clientOrderRepositery.save(newOrder);
  }

  async findByid(id: number) {
    const client = await this.clientRepository.findOne({ id });
    if (!client) {
      throw new HttpException(
        'Client with id  not found',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return client;
  }
}
