import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from 'dotenv';
import { Exercise } from "../models/exercice";
import { Training } from "../models/training";
import { ExerciseSet } from "../models/exercice_set";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
dotenv.config();

export const database = new Sequelize('jpec_home_training', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});
console.log("OUPS");


Training.init(
  {
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
  },
  {
    tableName: "training",
    sequelize: database, 
  }
);

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    restAfter: {
      type: DataTypes.INTEGER
    },
  },
  {
    tableName: "exercise",
    sequelize: database, 
  }
);

ExerciseSet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    repsOrDuration: {type: DataTypes.INTEGER},
    rest: {type: DataTypes.INTEGER},
    weight: {type: DataTypes.INTEGER},
  },
  {
    tableName: "exercise_set",
    sequelize: database, 
  }
);

// ExerciseSet.hasOne(Exercise)
// ExerciseSet.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("ExerciseSet table created"));
// database.afterSync(options=>{
//   Training.hasMany(Exercise, {as: 'exercises'}); 
//   Exercise.belongsTo(Training, {'foreignKey': 'trainingId'})
// });
export const TrainingExercise = Training.hasMany(Exercise);
export const ExerciseTraining = Exercise.belongsTo(Training);
// export const TrainingExercise = Training.hasMany(Exercise, {as: 'exercises', sourceKey:'id'});
// export const ExerciseTraining = Exercise.belongsTo(Training, {targetKey: 'id', as: 'training_id'});
database.sync({force: true});