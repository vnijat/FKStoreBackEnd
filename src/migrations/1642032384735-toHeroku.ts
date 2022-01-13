import {MigrationInterface, QueryRunner} from "typeorm";

export class toHeroku1642032384735 implements MigrationInterface {
    name = 'toHeroku1642032384735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "purchase_price" integer NOT NULL DEFAULT '0', "stock_price" integer NOT NULL DEFAULT '0', "quantity" integer NOT NULL, "unit" character varying NOT NULL DEFAULT 'piece', "supplier" character varying NOT NULL DEFAULT 'unknown', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer, "barCodeId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bar_code" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, CONSTRAINT "UQ_050af0cc92fd1dd765712dbc9b1" UNIQUE ("code"), CONSTRAINT "PK_3db388caf6589fb95abdc7798ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_788929ed61ab78bb914f0d1931b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_a5772dc45407276f68547b10778" FOREIGN KEY ("barCodeId") REFERENCES "bar_code"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_a5772dc45407276f68547b10778"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_788929ed61ab78bb914f0d1931b"`);
        await queryRunner.query(`DROP TABLE "bar_code"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
