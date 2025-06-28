import { Sequelize } from "sequelize";
import fs from "fs"
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.PORT),
    logging: true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.SSL_CA_PATH
        // ca: fs.readFileSync(process.env.SSL_CA_PATH).toString(),
      },
    },
  },
);
