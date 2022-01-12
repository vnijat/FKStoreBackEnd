import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'fkstore',
    password: 'n24i8cat',
    database: 'fkinventory',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // synchronize: true,
};

export default config;
