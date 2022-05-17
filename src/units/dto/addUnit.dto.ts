import { IsNotEmpty, IsString } from 'class-validator';

export class AddUnitDto {
  @IsNotEmpty()
  @IsString()
  /**
   * Unit measure name
   * @example meter
   */
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  /**
   * Unit measure symbol
   * @example m for meter kg for kilo
   */
  readonly symbol: string;
}
