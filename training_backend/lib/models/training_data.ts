import { Association, Model } from "sequelize";
import { Exercise } from "./exercise";
import { Training } from "./training";

export interface TrainingDataAttributes {
  id: number,
}

export class TrainingData extends Model<TrainingDataAttributes>
  implements TrainingDataAttributes {
    public id!: number;
    public refTraining!: Training;
    public doneExercises: Array<Exercise>;

  public static associations: {
    refTraining: Association<Training, TrainingData>;
    doneExercises: Association<TrainingData, Exercise>;
  };
}