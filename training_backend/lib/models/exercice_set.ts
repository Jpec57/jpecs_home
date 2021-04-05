import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Exercise } from "./exercice";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
export class ExerciseSet extends Model {
    public id!: number;
    public repsOrDuration!: number;
    public rest!: number;
    public weight: number;
  }
  
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
ExerciseSet.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("ExerciseSet table created"));

export interface ExerciseSetInterface {
  repsOrDuration: number;
  rest: number;
  weight: number;
}
