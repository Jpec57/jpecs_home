import { Model } from "sequelize";

export interface ExerciseDataAttributes {
  id: number;
    name: string;
    description: string;
    img: string;
    // requiredMaterial: Array<String>;
    isHold: boolean;
    executionType: number | null;

    //Difficulty
  difficulty: number | null;
  chest_ratio: number | null;
  triceps_ratio: number | null;
  back_ratio: number | null;
  biceps_ratio: number | null;
  calf_ratio: number | null;
  forearm_ratio: number | null;
  shoulder_ratio: number | null;
  quadriceps_ratio: number | null;
  hamstring_ratio: number | null;
  abs_ratio: number | null;
}

export class ExerciseData extends Model<ExerciseDataAttributes> {
  public id!: number;
  public name!: string;
  public description: string;
  public img: string;
  // public requiredMaterial: Array<String>;
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
