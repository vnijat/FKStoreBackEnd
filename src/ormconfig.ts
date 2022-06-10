import { ConnectionOptions } from 'typeorm';
import { ItemSubscriber } from './items/subscribers/itemEntitySubscriber';

const config: ConnectionOptions = {
  //   url: process.env.DATABASE_URL,
  type: 'postgres',
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  host: 'localhost',
  port: 5432,
  username: 'fkstore',
  password: 'n24i8cat',
  database: 'fkinventory',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // synchronize: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
  subscribers: [ItemSubscriber],
};

export default config;
