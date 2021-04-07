import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const database = new Sequelize('jpec_home_training', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

  