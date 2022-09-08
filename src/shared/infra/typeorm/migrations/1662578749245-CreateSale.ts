import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSale1662578749245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "car_id",
                        type: "uuid"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "client_id",
                        type: "uuid"
                    },
                    {
                        name: "proposal_amount",
                        type: "numeric",
                    },
                    {
                        name: "sold",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },

                ],
                foreignKeys: [
                    {
                        name: "FKCarSale",
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        columnNames: ["car_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserSale",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales")
    }

}
