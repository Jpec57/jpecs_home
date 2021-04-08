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
export interface ExerciseSetInterface {
  repsOrDuration: number;
  rest: number;
  weight: number;
}
