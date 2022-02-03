import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersServices {
  constructor() {

  }
async getOrders(){
    return 'There Will Be Orders'
}

}

