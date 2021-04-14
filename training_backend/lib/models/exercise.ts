// import { ExerciseSet } from "../config/database";
import { Model, Optional, Association, HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from "sequelize";
import { ExerciseSet } from "./exercice_set";
export interface ExerciseAttributes {
  id: number,
  restAfter: number; 
}
interface ExerciseCreationAttributes extends Optional<ExerciseAttributes, "id"> {}

export class Exercise extends Model<ExerciseAttributes, ExerciseCreationAttributes>
  implements ExerciseAttributes {
    public id!: number;
    public restAfter: number;

    
    // Since TS cannot determine model association at compile time
    // we have to declare them here purely virtually
    // these will not exist until `Model.init` was called.
    public getExerciseSets!: HasManyGetAssociationsMixin<ExerciseSet>; // Note the null assertions!
    public addExerciseSets!: HasManyAddAssociationMixin<ExerciseSet, number>;
    public hasExerciseSets!: HasManyHasAssociationMixin<ExerciseSet, number>;
    public countExerciseSets!: HasManyCountAssociationsMixin;
    public createExerciseSet!: HasManyCreateAssociationMixin<ExerciseSet>;
    
    // You can also pre-declare possible inclusions, these will only be populated if you
    // actively include a relation.
    public sets: ExerciseSet[];

  public static associations: {
    sets: Association<Exercise, ExerciseSet>;
  };
}