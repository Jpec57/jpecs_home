import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { ExerciseSet } from "./exercice_set";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import { ExerciseData } from "./exercise_data";

export class Exercise extends Model {
  public id!: number;
  public sets: Array<ExerciseSet>;
  public restAfter: number;
}
export interface ExerciseInterface {
  sets: Array<ExerciseSet>;
  restAfter: number; 
}


Exercise.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },

      restAfter: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: "exercise",
      sequelize: database, 
    }
  );

// Exercise.belongsTo(ExerciseData)
// ExerciseData.hasMany(Exercise);
Exercise.hasMany(ExerciseSet)
Exercise.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("Exercise table created"));

