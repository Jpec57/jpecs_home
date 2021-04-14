import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';
import { Training } from "../models/training";
import { Exercise } from "../models/exercise";
import { ExerciseSet } from "../models/exercice_set";
import { ExerciseData } from "../models/exercise_data";
import { TrainingData } from "../models/training_data";
dotenv.config();

export const database = new Sequelize('jpec_home_training', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite',

});


TrainingData.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
}, { sequelize: database, modelName: 'training_data'}
);

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

ExerciseData.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    description: {
        type: DataTypes.TEXT
      },
    img: {
      type: DataTypes.STRING
    },
    // requiredMaterial: {
    //   type: DataTypes.STRING,
    //   get() {
    //     return this.getDataValue('requiredMaterial').split(';')
    // },
    // set(val: Array<String>) {
    //    this.setDataValue('requiredMaterial', val.join(';'));
    // },
    // },
    isHold: {
      type: DataTypes.BOOLEAN
    },
    executionType: {
      type: DataTypes.INTEGER
    },
    difficulty: {
      type: DataTypes.INTEGER
    },
    chest_ratio: {
      type: DataTypes.FLOAT
    },
    triceps_ratio: {
      type: DataTypes.FLOAT
    },
    back_ratio: {
      type: DataTypes.FLOAT
    },
    biceps_ratio: {
      type: DataTypes.FLOAT
    },
    calf_ratio: {
      type: DataTypes.FLOAT
    },
    forearm_ratio: {
      type: DataTypes.FLOAT
    },
    shoulder_ratio: {
      type: DataTypes.FLOAT
    },
    quadriceps_ratio: {
      type: DataTypes.FLOAT
    },
    hamstring_ratio: {
      type: DataTypes.FLOAT
    },
    abs_ratio: {
      type: DataTypes.FLOAT
    },
  },
  {
    tableName: "exercise_data",
    sequelize: database, 
  }
);


Exercise.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
    restAfter: {
    type: DataTypes.INTEGER
  },
}, {sequelize: database, modelName: 'exercise'}
);

ExerciseSet.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  rest: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.INTEGER
  },
  repsOrDuration: {
    type: DataTypes.INTEGER
  },
},
{ sequelize: database, modelName: 'exercise_set'}
);

//Training
export const TrainingExercise = Training.hasMany(Exercise);
export const TrainingTrainingData = Training.hasMany(TrainingData);
//TrainingData
export const TrainingDataTraining = TrainingData.belongsTo(Training);
export const TrainingDataExercises = TrainingData.hasMany(Exercise);

//Exercise
export const ExerciseTraining = Exercise.belongsTo(Training);
export const ExerciseExerciseSet = Exercise.hasMany(ExerciseSet);
export const ExerciseExerciseData = Exercise.belongsTo(ExerciseData, {as: 'exerciceData'});

//ExerciseSet
export const ExerciseSetExercise = ExerciseSet.belongsTo(Exercise);
//ExerciseData
export const ExerciseDataExercise = ExerciseData.hasMany(Exercise);

database.sync({force: false});
// database.authenticate();