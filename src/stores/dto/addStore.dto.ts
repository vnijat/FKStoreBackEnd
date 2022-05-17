import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddStoreDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly address: string;

  @IsOptional()
  readonly phone: string;
}
