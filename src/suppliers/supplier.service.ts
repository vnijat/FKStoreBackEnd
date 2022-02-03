import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierServices {
  constructor() {}

  async getSuppliers() {
    return 'SUPPLIERS WILL BE';
  }
}
