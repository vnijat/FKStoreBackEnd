import {
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
import { ClientType } from '../enums/clienttype.enum';

export class AddClientOrderDto {
  @IsNotEmpty()
  readonly title: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly price: number;

  @IsOptional()
  readonly paid: string;

  @IsNotEmpty()
  readonly clientId: number;
}
