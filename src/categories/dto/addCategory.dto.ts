import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddCategoryDto {
  @IsNotEmpty()
  readonly title: string;

  @IsOptional()
  readonly parentCategoryId: number;
}
