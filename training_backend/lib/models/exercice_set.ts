import { Model } from "sequelize";


export interface ExerciseSetInterface {
  id: number;
  repsOrDuration: number;
  rest: number;
  weight: number;
}
