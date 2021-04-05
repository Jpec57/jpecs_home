import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import { Exercise } from "./exercice";

export class ExerciseData extends Model {
  public id!: number;
  public name!: string;
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
export interface ExerciseDataInterface {
    name: string;
    description: string;
    img: string;
    requiredMaterial: Array<String>;
    isHold: boolean;
    executionType: number;

    //Difficulty
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

ExerciseData.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("ExerciseData table created"));

