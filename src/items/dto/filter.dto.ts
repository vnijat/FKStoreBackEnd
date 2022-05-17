import { IsOptional } from 'class-validator';

export class FilterDto {
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
}
