import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { ExerciseSet } from "./exercice_set";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import { ExerciseData } from "./exercise_data";

export class Exercise extends Model {
  public id!: number;
  public sets: Array<ExerciseSet>;
  public restAfter: number;
}
export interface ExerciseInterface {
  id: number,
  sets: Array<ExerciseSet>;
  restAfter: number; 
}