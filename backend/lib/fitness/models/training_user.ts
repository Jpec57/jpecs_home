import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";

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

  TrainingUser.sync({ force: true }).then(() => console.log("TrainingUser table created"));

  export interface TrainingUserInterface {
    firstname: string;
    lastname: string;
  }