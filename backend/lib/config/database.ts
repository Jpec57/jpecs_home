import { Sequelize } from "sequelize";

export const database = new Sequelize('jpec_home', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

  