import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Order } from '../enums/order.enum';

export class QueryParamsDto {
  @IsOptional()
  readonly search?: string;

  @IsOptional()
  readonly page?: number = 1;

  @IsOptional()
  readonly take?: number = 10;

  @IsOptional()
  sort?: string = 'item.createdAt';

  @IsOptional()
  order?: Order = Order.DESC;

  @IsOptional()
  readonly barcodeId?: string;

  @IsOptional()
  readonly categoryId?: string;

  @IsOptional()
  readonly supplierId?: string;

  @IsOptional()
  readonly unitId?: string;

  @IsOptional()
  readonly locationId?: string;

  @IsOptional()
  readonly storeId?: string;

  @IsOptional()
  readonly labelId?: string;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
