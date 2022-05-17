import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  readonly ItemId: number;

  @IsNotEmpty()
  readonly unit: string;

  @IsNotEmpty()
  @IsNumber()
  readonly pricePerUnit: number;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;

  @IsNotEmpty()
  @IsNumber()
  readonly orderId: number;
}
