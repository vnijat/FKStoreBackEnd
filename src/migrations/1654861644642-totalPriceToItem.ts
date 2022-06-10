import {MigrationInterface, QueryRunner} from "typeorm";

export class totalPriceToItem1654861644642 implements MigrationInterface {
    name = 'totalPriceToItem1654861644642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "total_price" numeric(19,3) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "total_price"`);
    }

}
