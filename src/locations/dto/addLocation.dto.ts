import { IsNotEmpty } from 'class-validator';

export class AddLocationDto {
  @IsNotEmpty()
  readonly code: string;
}
