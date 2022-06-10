import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditItemDto {
  @IsOptional()
  @IsNotEmpty()
  /**
   * Item Name
   */
  readonly name: string;
  @IsOptional()
  @IsString()
  /**
   * Item description
   */
  readonly description: string;

  @IsOptional()
  @IsNotEmpty()
  /**
   * Barcde id
   */
  @IsNumberString()
  readonly barcodeId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly purchasePrice: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly pricePerUnit: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly supplierId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly unitId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly categoryId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly storeId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly locationId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  readonly quantity: number;
}
