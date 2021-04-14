import { Model, Optional, Association, HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from "sequelize";
import { Exercise } from "./exercise";

// https://sequelize.org/master/manual/typescript.html
export interface TrainingAttributes {
  id: number,
  name: string;
  img: string | null;
}

interface TrainingCreationAttributes extends Optional<TrainingAttributes, "id"> {}


export class Training extends Model<TrainingAttributes, TrainingCreationAttributes>
  implements TrainingAttributes {
  public id!: number;
  public name!: string;
  public img: string | null;


  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  public getExercises!: HasManyGetAssociationsMixin<Exercise>; // Note the null assertions!
  public addExercise!: HasManyAddAssociationMixin<Exercise, number>;
  public hasExercise!: HasManyHasAssociationMixin<Exercise, number>;
  public countExercises!: HasManyCountAssociationsMixin;
  public createExercise!: HasManyCreateAssociationMixin<Exercise>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public exercises: Exercise[];

  public static associations: {
    exercises: Association<Training, Exercise>;
  };
}