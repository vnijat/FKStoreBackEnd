import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddItemDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly barCode: string;

  @IsOptional()
  @IsNumber()
  readonly purchasePrice: number;

  @IsOptional()
  @IsNumber()
  readonly stockPrice: number;

  @IsOptional()
  @IsString()
  readonly supplier: string;

  @IsOptional()
  @IsString()
  readonly unit: string;

  @IsNotEmpty()
  readonly category: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
}
