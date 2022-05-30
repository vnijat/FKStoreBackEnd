import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { AddItemDto } from './dto/addItem.dto';
import { ItemEntity } from './item.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { BarCodeService } from 'src/barcode/barcode.service';
import { StoresService } from 'src/stores/stores.service';
import { LocationsService } from 'src/locations/locations.service';
import { UnitsService } from 'src/units/units.service';
import { SupplierService } from 'src/suppliers/suppliers.service';
import { EditItemDto } from './dto/editItem.dto';
import { QueryParamsDto } from './dto/queryParams.dto';
import { QueryResponseDto } from './dto/queryResponse.dto';
import { PageMetaDto } from './dto/pageMeta.dto';
import { ColorEntity } from './color.entity';
import { LabelEntity } from './label.entity';

@Injectable()
export class ItemsServices {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
    @InjectRepository(ColorEntity)
    private readonly colorRepository: Repository<ColorEntity>,
    @InjectRepository(LabelEntity)
    private readonly labelRepository: Repository<LabelEntity>,
    private readonly categoriesService: CategoriesService,
    private readonly barCodeService: BarCodeService,
    private readonly storesService: StoresService,
    private readonly locationService: LocationsService,
    private readonly unitService: UnitsService,
    private readonly suppliersService: SupplierService,
  ) {}

  async getAll(
    queryParamsDto: QueryParamsDto,
  ): Promise<QueryResponseDto<ItemEntity>> {
    const queryBuilder = getRepository(ItemEntity)
      .createQueryBuilder('item')
      .addSelect('item.createdAt')
      .leftJoinAndSelect('item.barcode', 'barcode')
      .leftJoinAndSelect('item.category', 'category')
      .leftJoinAndSelect('item.supplier', 'supplier')
      .leftJoinAndSelect('item.unit', 'unit')
      .leftJoinAndSelect('item.location', 'location')
      .leftJoinAndSelect('item.store', 'store');

    const itemsCount = await queryBuilder.getCount();

    const {
      take,
      skip,
      barcodeId,
      categoryId,
      supplierId,
      unitId,
      locationId,
      storeId,
      search,
      sort,
      order,
      labelId,
    } = queryParamsDto;

    const filterParams = {
      barcodeId,
      categoryId,
      supplierId,
      unitId,
      locationId,
      storeId,
      labelId,
    };

    const orderBy = { sort, order };

    if (take) {
      queryBuilder.take(take);
    }
    if (skip) {
      queryBuilder.skip(skip);
    }
    if (!!search?.length) {
      queryBuilder
        .andWhere('item.name ILIKE :search', { search: `%${search}%` })
        .orWhere('item.description ILIKE :search', { search: `%${search}%` });
    }

    for (let keyName in filterParams) {
      if (filterParams[keyName]) {
        const arrayOfIds = filterParams[keyName].split(',');
        queryBuilder.andWhere(`item.${keyName} IN(:...${keyName})`, {
          [keyName]: arrayOfIds,
        });
      }
    }
    queryBuilder.orderBy(sort, order);

    const [items, itemCount] = await queryBuilder.getManyAndCount();
    const pageMetaDto = new PageMetaDto({
      queryParamsDto,
      itemCount,
    });

    return new QueryResponseDto(
      items,
      pageMetaDto,
      filterParams,
      itemsCount,
      orderBy,
    );
  }

  async addItem(addItemDto: AddItemDto): Promise<ItemEntity> {
    const item = new ItemEntity();
    const {
      barcodeId,
      categoryId,
      unitId,
      supplierId,
      storeId,
      locationId,
      colorId,
      labelId,
    } = addItemDto;
    Object.assign(item, addItemDto);
    item.barcode = await this.barCodeService.findByid(barcodeId);
    item.category = await this.categoriesService.findByid(categoryId);
    item.store = await this.storesService.findByid(storeId);
    item.unit = await this.unitService.findByid(unitId);
    item.supplier = await this.suppliersService.findById(supplierId);
    item.location = await this.locationService.findByid(locationId);
    item.color = await this.findColorByid(colorId);
    item.label = await this.findLabelByid(labelId);

    return await this.itemRepository.save(item);
  }

  async findColorByid(id: number) {
    const color = await this.colorRepository.findOne({ id });
    if (!color) {
      throw new HttpException(
        'there is no Color with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return color;
  }

  async findLabelByid(id: number) {
    const label = await this.labelRepository.findOne({ id });
    if (!label) {
      throw new HttpException(
        'there is no label with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return label;
  }

  async getColorForInput() {
    return await this.colorRepository
      .createQueryBuilder()
      .select(['id AS id', 'name AS label'])
      .getRawMany();
  }

  async getLabelForInput() {
    return await this.labelRepository
      .createQueryBuilder()
      .select(['id AS id', 'name AS label'])
      .getRawMany();
  }

  async getInputs() {
    const barcode = await this.barCodeService.getbarcodeForInput();
    const category = await this.categoriesService.getCategoriesForInput();
    const store = await this.storesService.getStoresForInput();
    const unit = await this.unitService.getUnitsForInput();
    const supplier = await this.suppliersService.getSuppliersForInput();
    const location = await this.locationService.getLocationsForInput();
    const color = await this.getColorForInput();
    const label = await this.getLabelForInput();
    return { barcode, category, store, unit, supplier, location, color, label };
  }

  async deleteMany(Ids: number[]) {
    await this.itemRepository
      .createQueryBuilder()
      .delete()
      .where('id IN (:...Ids)', {
        Ids,
      })
      .execute();
  }

  async editItem(itemId: number, editItemDto: EditItemDto) {
    const item = await this.findByid(itemId);
    Object.assign(item, editItemDto);
    return await this.itemRepository.save(item);
  }

  async findByid(id: number) {
    const item = await this.itemRepository.findOne({ id });
    if (!item) {
      throw new HttpException(
        'there is no item with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return item;
  }
}
