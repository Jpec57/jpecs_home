import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";
import { NamedExerciseSet } from "./named_exercise_set";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../../constants";

export class TrainingData extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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
