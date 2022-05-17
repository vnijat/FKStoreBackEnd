import { IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class EditItemDto {
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
  
    @IsNotEmpty()
    /**
     * Barcde id
     */
    @IsNumberString()
    readonly barcodeId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly purchasePrice: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly pricePerUnit: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly supplierId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly unitId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly categoryId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly storeId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly locationId: number;
  
    @IsNotEmpty()
    @IsNumberString()
    readonly quantity: number;
  }
  