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
