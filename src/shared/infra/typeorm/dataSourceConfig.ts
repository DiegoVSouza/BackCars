import { DataSource } from "typeorm"
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "123",
    database: "ignitedb",
    migrations: [__dirname + "/migrations/*.ts"],
    entities: [__dirname + "/entities/*.ts"],
    subscribers: [__dirname + "/subscribers/*.ts"],
    migrationsTableName: 'migrations',
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

