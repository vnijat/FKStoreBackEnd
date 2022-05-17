import { Order } from '../enums/order.enum';
import { FilterDto } from './filter.dto';
import { PageMetaDto } from './pageMeta.dto';

export class QueryResponseDto<T> {
  readonly items: T[];

  readonly meta: PageMetaDto;

  readonly filter: FilterDto;

  readonly itemsCount: number;

  readonly orderBy: { sort: string; order: Order };

  constructor(
    items: T[],
    meta: PageMetaDto,
    filter: FilterDto,
    itemsCount: number,
    order: { sort: string; order: Order },
  ) {
    this.items = items;
    this.meta = meta;
    this.filter = filter;
    this.orderBy = order;
    this.itemsCount = itemsCount;
  }
}
