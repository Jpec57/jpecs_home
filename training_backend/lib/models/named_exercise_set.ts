import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Exercise } from "./exercice";
import { TrainingData } from "./training_data";
import { SEQUELIZE_SYNC_FORCE } from "../constants";

export class NamedExerciseSet extends Model {
    public id!: number;
    public name!: string;
    public repsOrDuration!: number;
    public rest!: number;
    public weight: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  NamedExerciseSet.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        repsOrDuration: {type: DataTypes.INTEGER},
        rest: {type: DataTypes.INTEGER},
        weight: {type: DataTypes.INTEGER},
      },
      {
        tableName: "named_exercise_set",
        sequelize: database, 
      }
    );
// NamedExerciseSet.belongsToMany(TrainingData, {through: 'training_data_exercise_set'})
// NamedExerciseSet.belongsTo(Exercise);

NamedExerciseSet.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("NamedExerciseSet table created"));

export interface NamedExerciseSetInterface {
  name: string;
  repsOrDuration: number;
  rest: number;
  weight: number;
}