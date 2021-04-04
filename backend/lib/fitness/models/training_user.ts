import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";
import { Training } from "./training";
import { SEQUELIZE_SYNC_FORCE } from "../../constants";

export class TrainingUser extends Model {
  public id!: number;
  public lastname!: string;
  public firstname!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TrainingUser.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      lastname: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      firstname: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "training_user",
      sequelize: database, 
    }
  );

//   TrainingUser.hasMany(Training)
  TrainingUser.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("TrainingUser table created"));

  export interface TrainingUserInterface {
    firstname: string;
    lastname: string;
  }