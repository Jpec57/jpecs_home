import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";
import { Exercise } from "./exercice";
import { TrainingData } from "./training_data";
import { TrainingUser } from "./training_user";
import { SEQUELIZE_SYNC_FORCE } from "../../constants";

export class Training extends Model {
  public id!: number;
  public name!: string;
  public img: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


Training.init(
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
      img: {
        type: DataTypes.STRING},
    },
    {
      tableName: "training",
      sequelize: database, 
    }
  );
//   Training.hasMany(Exercise)
//   Training.hasMany(TrainingData);
// Training.belongsTo(TrainingUser);
  Training.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("Training table created"));

  export interface TrainingInterface {
    name: string;
  }