import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';
import { Model } from "sequelize";
dotenv.config();

export const database = new Sequelize('jpec_home_training', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite',

});

export class Training extends Model{}

Training.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING
  }, 
}, { sequelize: database, modelName: 'training'}
);

export class Exercise extends Model{}

Exercise.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  restAfter: {
    type: DataTypes.INTEGER
  },
},
{ sequelize: database, modelName: 'exercise'}
);

export const TrainingExercise = Training.hasMany(Exercise);
export const ExerciseTraining = Exercise.belongsTo(Training);

database.sync({force: true});