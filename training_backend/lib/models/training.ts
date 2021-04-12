import { Model, Optional, Association, HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from "sequelize";
import { Exercise } from "../config/database";

// https://sequelize.org/master/manual/typescript.html

// export class Training extends Model{}

// Training.init({
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: new DataTypes.STRING(128),
//     allowNull: false,
//   },
//   img: {
//     type: DataTypes.STRING
//   }, 
// }, { sequelize: database, modelName: 'training'}
// );

interface TrainingAttributes {
  id: number,
  name: string;
  img: string;
  exercises: Array<Exercise>;
}

interface TrainingCreationAttributes extends Optional<TrainingAttributes, "id"> {}


export class Training extends Model<TrainingAttributes, TrainingCreationAttributes>
  implements TrainingAttributes {
  public id!: number;
  public name!: string;
  public img: string;
  public exercises?: Exercise[];


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

  public static associations: {
    exercises: Association<Training, Exercise>;
  };
}