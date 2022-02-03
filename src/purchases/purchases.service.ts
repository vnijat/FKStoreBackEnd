import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchasesServices {
  constructor() {

  }
async getPurchases(){
    return 'There Will Be Purchases'
}
  
}

