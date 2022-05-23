import AdminJS from 'adminjs';
import { extname } from 'path';
import { BarcodeEntity } from './barcode/barcode.entity';
import { CategoryEntity } from './categories/category.entity';
import { ClientEntity } from './clients/entities/client.entity';
import { ClientOrderEntity } from './clients/entities/client.order.entity';
import { ColorEntity } from './items/color.entity';
import { ItemEntity } from './items/item.entity';
import { LabelEntity } from './items/label.entity';
import { LocationEntity } from './locations/location.entity';
import { OrderItemEntity } from './orders/entities/orderItem.entity';
import { OrderEntity } from './orders/entities/orders.entity';
import { PurchaseEntity } from './purchases/entities/purchase.entity';
import { PurchaseItemEntity } from './purchases/entities/purchaseItem.entity';
import { StoreEntity } from './stores/store.entity';
import { SupplierEntity } from './suppliers/supplier.entity';
import { UnitEntity } from './units/unit.entity';

export const generateFileName = (req, file, cb) => {
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

  return cb(null, `${randomName}${extname(file.originalname)}`);
};

export const adminjSConfig = {
  adminJsOptions: {
    rootPath: '/admin/',
    dashboard: {
      component: AdminJS.bundle('./admin/dashboard'),
    },
    // resources: [__dirname + '/**/*.entity{.ts,.js}'],
    resources: [
      BarcodeEntity,
      ItemEntity,
      {
        resource: ClientEntity,
        options: {
          parent: { name: 'Client' },
        },
      },
      {
        resource: ClientOrderEntity,
        options: {
          parent: { name: 'Client' },
        },
      },
      CategoryEntity,
      {
        resource: OrderEntity,
        options: {
          parent: { name: 'Order' },
        },
      },
      {
        resource: OrderItemEntity,
        options: {
          parent: { name: 'Order' },
        },
      },
      PurchaseEntity,
      PurchaseItemEntity,
      LocationEntity,
      StoreEntity,
      SupplierEntity,
      UnitEntity,
      ColorEntity,
      LabelEntity,
    ],
    locale: {
      language: 'en',
      translations: {
        labels: {
          BarcodeEntity: 'Barcodes',
          ItemEntity: 'Items',
          ClientEntity: 'Clients',
          ClientOrderEntity: 'Client Orders',
          CategoryEntity: 'Categories',
          OrderEntity: 'Orders',
          OrderItemEntity: 'Order Item',
          PurchaseEntity: 'Purchases',
          PurchaseItemEntity: 'Purchase Item',
          LocationEntity: 'Locations',
          StoreEntity: 'Stores',
          SupplierEntity: 'Suppliers',
          UnitEntity: 'Units',
          ColorEntity:'Colors',
          LabelEntity:'Labels'
        },
      },
    },
    branding: {
      companyName: 'FK',
    },
  },
};
