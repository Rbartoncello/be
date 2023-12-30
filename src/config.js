import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  database: process.env.DB_DATABASE || "exampledb",
};
