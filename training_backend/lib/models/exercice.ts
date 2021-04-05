import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { ExerciseSet } from "./exercice_set";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../constants";

export class Exercise extends Model {
  public id!: number;
  public name!: string;
  public description: string;
  public img: string;
  public isHold!: boolean;
//   public requiredMaterial: any;
//         // requiredMaterial: type.ARRAY(type.STRING),
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Exercise.init(
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
      description: {
          type: DataTypes.STRING},
      img: {
        type: DataTypes.STRING},
      // requiredMaterial: type.ARRAY(type.STRING),
      isHold: {
        type: DataTypes.BOOLEAN},
      restAfter: {type: DataTypes.INTEGER}
    },
    {
      tableName: "exercise",
      sequelize: database, 
    }
  );

 Exercise.belongsToMany(Training, {through: 'training_exercise'})
Exercise.hasMany(ExerciseSet)
 
  Exercise.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("Exercise table created"));

  export interface ExerciseInterface {
    name: string;
    description: string;

  }