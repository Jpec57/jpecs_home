import { Model } from "sequelize";


export interface ExerciseSetAttributes {
  id: number;
  repsOrDuration: number;
  rest: number;
  weight: number | null;
}
export class ExerciseSet extends Model<ExerciseSetAttributes>
  implements ExerciseSetAttributes {
  public id!: number;
  public repsOrDuration!: number;
  public rest!: number;
  public weight: number | null;
}