import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovePhotoNameFromInputEntity1653919584949 implements MigrationInterface {
    name = 'RemovePhotoNameFromInputEntity1653919584949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "photo_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "photo_name" character varying`);
    }

}
