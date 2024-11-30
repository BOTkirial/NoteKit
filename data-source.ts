import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AppDataSource = new DataSource({
    type: "postgres",
    // variables from the .env file
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/src/entities/**/*.ts"],
    migrations: [__dirname + "/src/migrations/**/*.ts"],
    synchronize: false,
    logging: true
})