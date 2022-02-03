import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsServices {
  constructor() {

  }
async getClients(){
    return 'There Will Be Clients'
}

}

