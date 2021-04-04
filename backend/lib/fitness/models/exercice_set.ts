import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";
import { Exercise } from "./exercice";
import { SEQUELIZE_SYNC_FORCE } from "../../constants";
export class ExerciseSet extends Model {
    public id!: number;
    public repsOrDuration!: number;
    public rest!: number;
    public weight: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  ExerciseSet.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
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

// ExerciseSet.belongsToMany(Exercise, {through: 'set_exercise'})

ExerciseSet.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("Exercise table created"));

export interface ExerciseSetInterface {
  repsOrDuration: number;
  rest: number;
  weight: number;
}
