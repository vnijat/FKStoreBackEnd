import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddCategoryDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly parentCategoryId: number;
}
