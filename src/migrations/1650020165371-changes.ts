import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1650020165371 implements MigrationInterface {
    name = 'changes1650020165371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "color" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "label" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "location" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "client" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "client_order" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "order" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "purchase" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "purchase_item" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "store" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "supplier_entity" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "unit" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "item" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "item" ADD "colorId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD "labelId" integer`);
        await queryRunner.query(`ALTER TABLE "bar_code" ADD "sku_code" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_4a9e4759ce4e217ff1c2a7cfdbb" FOREIGN KEY ("colorId") REFERENCES "color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_2cb3246e02e041aa5246d975f6a" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_2cb3246e02e041aa5246d975f6a"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_4a9e4759ce4e217ff1c2a7cfdbb"`);
        await queryRunner.query(`ALTER TABLE "bar_code" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "colorId"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "unit" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "supplier_entity" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "purchase_item" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "purchase" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "client_order" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "sku_code"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "color" character varying`);
        await queryRunner.query(`DROP TABLE "label"`);
        await queryRunner.query(`DROP TABLE "color"`);
    }

}
