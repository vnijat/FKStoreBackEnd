import {MigrationInterface, QueryRunner} from "typeorm";

export class addPhotoPath1643801022737 implements MigrationInterface {
    name = 'addPhotoPath1643801022737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ADD "photo_path" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "photo_path"`);
    }

}
