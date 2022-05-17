import { IsOptional } from 'class-validator';
import { Order } from '../enums/order.enum';

export class PageParamsDto {
  @IsOptional()
  readonly page?: number = 1;

  @IsOptional()
  readonly take?: number = 10;
   
  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
