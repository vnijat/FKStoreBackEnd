import {MigrationInterface, QueryRunner} from "typeorm";

export class newpc1653324496798 implements MigrationInterface {
    name = 'newpc1653324496798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "title" character varying NOT NULL, "photo_name" character varying, "parentId" integer, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "code" character varying NOT NULL, CONSTRAINT "UQ_50d67b2c22be390e74257516ab8" UNIQUE ("code"), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."client_type_enum" AS ENUM('corporate', 'individual')`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "first_name" character varying NOT NULL, "last_name" character varying, "description" character varying, "phone" character varying, "type" "public"."client_type_enum" NOT NULL DEFAULT 'individual', CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_order" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "title" character varying NOT NULL, "description" character varying, "status" character varying NOT NULL DEFAULT 'uncompleted', "price" numeric(19,3) NOT NULL DEFAULT '0', "paid" numeric(19,3) NOT NULL DEFAULT '0', "clientId" integer, CONSTRAINT "PK_df9613f771136dc7059b147a601" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "totalItems" integer NOT NULL DEFAULT '0', "totalPrice" numeric(19,3) NOT NULL DEFAULT '0', "status" character varying NOT NULL DEFAULT 'pending', "clientOrderId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "unit" character varying NOT NULL, "price_per_unit" numeric(19,3) NOT NULL DEFAULT '0', "quantity" numeric(10,3) NOT NULL DEFAULT '0', "total_price" numeric(19,3) NOT NULL DEFAULT '0', "itemId" integer, "orderId" integer, CONSTRAINT "PK_c12e105219e59720676c72957dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "total_price" numeric(19,3) NOT NULL, "total_items" integer NOT NULL, CONSTRAINT "PK_86cc2ebeb9e17fc9c0774b05f69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_item" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "unit" character varying NOT NULL, "price_per_unit" numeric(19,3) NOT NULL DEFAULT '0', "quantity" numeric(10,3) NOT NULL DEFAULT '0', "total_price" numeric(19,3) NOT NULL DEFAULT '0', "purchaseId" integer, "itemId" integer, CONSTRAINT "PK_e7e6cd38bb62fd147ab2f91f656" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "description" character varying, "address" character varying, "phone" character varying, CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "address" character varying, "phone" character varying, "email" character varying, CONSTRAINT "PK_72d4c59ef8e52fc761dfb5a20d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unit" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "symbol" character varying NOT NULL, CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "color" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "label" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "name" character varying NOT NULL, "photo_name" character varying, "description" character varying NOT NULL DEFAULT '', "purchase_price" numeric(19,3) NOT NULL DEFAULT '0', "price_per_unit" numeric(19,3) NOT NULL DEFAULT '0', "quantity" numeric(10,3) NOT NULL, "colorId" integer, "unitId" integer, "categoryId" integer, "barcodeId" integer, "supplierId" integer, "locationId" integer, "storeId" integer, "labelId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bar_code" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "sku_code" character varying NOT NULL DEFAULT '', "code" character varying NOT NULL, CONSTRAINT "UQ_050af0cc92fd1dd765712dbc9b1" UNIQUE ("code"), CONSTRAINT "PK_3db388caf6589fb95abdc7798ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_closure" ("id_ancestor" integer NOT NULL, "id_descendant" integer NOT NULL, CONSTRAINT "PK_8da8666fc72217687e9b4f4c7e9" PRIMARY KEY ("id_ancestor", "id_descendant"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4aa1348fc4b7da9bef0fae8ff4" ON "category_closure" ("id_ancestor") `);
        await queryRunner.query(`CREATE INDEX "IDX_6a22002acac4976977b1efd114" ON "category_closure" ("id_descendant") `);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10" FOREIGN KEY ("parentId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_order" ADD CONSTRAINT "FK_66d38aa7ee49d09e9cfed785bfd" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_2f3282ad9de49c932ae04c52180" FOREIGN KEY ("clientOrderId") REFERENCES "client_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" ADD CONSTRAINT "FK_0f0b5224e890935642703c75403" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" ADD CONSTRAINT "FK_cd7ee8cfd1250200aa78d806f8d" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_item" ADD CONSTRAINT "FK_29ba18d69c81231e8ffabe478b4" FOREIGN KEY ("purchaseId") REFERENCES "purchase"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_item" ADD CONSTRAINT "FK_378454748bd1234c0d861215734" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_4a9e4759ce4e217ff1c2a7cfdbb" FOREIGN KEY ("colorId") REFERENCES "color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_f2a17f5a011c6a65d2e9e918a81" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_9de7760e6f7557bf0f8daccef67" FOREIGN KEY ("barcodeId") REFERENCES "bar_code"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_e7c44eae41483213a380f4c57c5" FOREIGN KEY ("supplierId") REFERENCES "supplier_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_e97b6ed5f00c41c3ef3b7f22685" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_304562e55f7e1e9f08920cb0a11" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_2cb3246e02e041aa5246d975f6a" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_closure" ADD CONSTRAINT "FK_4aa1348fc4b7da9bef0fae8ff48" FOREIGN KEY ("id_ancestor") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_closure" ADD CONSTRAINT "FK_6a22002acac4976977b1efd114a" FOREIGN KEY ("id_descendant") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_closure" DROP CONSTRAINT "FK_6a22002acac4976977b1efd114a"`);
        await queryRunner.query(`ALTER TABLE "category_closure" DROP CONSTRAINT "FK_4aa1348fc4b7da9bef0fae8ff48"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_2cb3246e02e041aa5246d975f6a"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_304562e55f7e1e9f08920cb0a11"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_e97b6ed5f00c41c3ef3b7f22685"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_e7c44eae41483213a380f4c57c5"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_9de7760e6f7557bf0f8daccef67"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_f2a17f5a011c6a65d2e9e918a81"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_4a9e4759ce4e217ff1c2a7cfdbb"`);
        await queryRunner.query(`ALTER TABLE "purchase_item" DROP CONSTRAINT "FK_378454748bd1234c0d861215734"`);
        await queryRunner.query(`ALTER TABLE "purchase_item" DROP CONSTRAINT "FK_29ba18d69c81231e8ffabe478b4"`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" DROP CONSTRAINT "FK_cd7ee8cfd1250200aa78d806f8d"`);
        await queryRunner.query(`ALTER TABLE "order_item_entity" DROP CONSTRAINT "FK_0f0b5224e890935642703c75403"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_2f3282ad9de49c932ae04c52180"`);
        await queryRunner.query(`ALTER TABLE "client_order" DROP CONSTRAINT "FK_66d38aa7ee49d09e9cfed785bfd"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6a22002acac4976977b1efd114"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4aa1348fc4b7da9bef0fae8ff4"`);
        await queryRunner.query(`DROP TABLE "category_closure"`);
        await queryRunner.query(`DROP TABLE "bar_code"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "label"`);
        await queryRunner.query(`DROP TABLE "color"`);
        await queryRunner.query(`DROP TABLE "unit"`);
        await queryRunner.query(`DROP TABLE "supplier_entity"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "purchase_item"`);
        await queryRunner.query(`DROP TABLE "purchase"`);
        await queryRunner.query(`DROP TABLE "order_item_entity"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "client_order"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TYPE "public"."client_type_enum"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
