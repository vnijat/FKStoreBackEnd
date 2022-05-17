import {
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
import { ClientType } from '../enums/clienttype.enum';

export class AddClientDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsOptional()
  readonly lastName: string;

  @IsOptional()
  readonly phone: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  @IsEnum(ClientType)
  readonly type: ClientType;
}
