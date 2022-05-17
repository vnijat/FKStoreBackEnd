import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class AddSupplierDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly address: string;

  @IsOptional()
  readonly phone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;
}
