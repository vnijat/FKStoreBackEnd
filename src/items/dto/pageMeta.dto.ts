import { Order } from '../enums/order.enum';
import { PageParamsDto } from './pageParams.dto';
import { QueryParamsDto } from './queryParams.dto';

export class PageMetaDto {
  readonly page: number;

  readonly take: number;

  readonly itemCount: number;

  readonly pageCount: number;

  readonly hasPreviousPage: boolean;

  readonly hasNextPage: boolean;

  constructor({
    queryParamsDto,
    itemCount,
  }: {
    queryParamsDto: QueryParamsDto;
    itemCount: number;
  }) {
    this.page = Number(queryParamsDto?.page);
    this.take = Number(queryParamsDto.take);
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
