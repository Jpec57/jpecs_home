import { Sequelize } from "sequelize";

export const database = new Sequelize('jpec_home_training', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

  