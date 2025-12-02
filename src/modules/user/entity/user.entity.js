import { EntitySchema } from "typeorm";

export const user = new EntitySchema ({
    name: 'User',
    tableName: 'user',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
            nullable: false
        },
        email: {
            type: 'varchar',
            unique: true,
        },
        password: {
            type: 'varchar',
            nullable: true
        }
    }
})