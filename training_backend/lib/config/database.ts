import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';
import { Model } from "sequelize";
import { Training } from "../models/training";
dotenv.config();

export const database = new Sequelize('jpec_home_training', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite',

});




export class ExerciseData extends Model {
  public id!: number;
  public name!: string;
  //  @Column(DataType.TEXT)
  public description: string;
  public img: string;
  public requiredMaterial: Array<String>;
  public isHold!: boolean;
  public executionType: number;

  difficulty: number;
  chest_ratio: number;
  triceps_ratio: number;
  back_ratio: number;
  biceps_ratio: number;
  calf_ratio: number;
  forearm_ratio: number;
  shoulder_ratio: number;
  quadriceps_ratio: number;
  hamstring_ratio: number;
  abs_ratio: number;
}


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
    requiredMaterial: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('requiredMaterial').split(';')
    },
    set(val: Array<String>) {
       this.setDataValue('requiredMaterial', val.join(';'));
    },
    },
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






export class Exercise extends Model{}

Exercise.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },

  restAfter: {
    type: DataTypes.INTEGER
  },
},
{ sequelize: database, modelName: 'exercise'}
);


export class ExerciseSet extends Model {
  // public id!: number;
  // public repsOrDuration!: number;
  // public rest!: number;
  // public weight: number;
}

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