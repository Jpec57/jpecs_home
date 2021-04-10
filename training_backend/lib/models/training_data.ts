/*
import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import { Exercise } from "./exercise";
export class TrainingData extends Model {
  public id!: number;
  public training: Training;
  public doneExercises: Array<Array<Exercise>>;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
// int trainingId;
// List<List<NamedExerciseSet>> doneExercises;
TrainingData.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      tableName: "training_data",
      sequelize: database, 
    }
  );
  // TrainingData.hasMany(NamedExerciseSet)
  // TrainingData.belongsTo(Training);
  TrainingData.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("TrainingData table created"));
  export interface TrainingDataInterface {
    id: number;
  }
*/