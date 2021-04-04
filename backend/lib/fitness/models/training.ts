import { Model, DataTypes } from "sequelize";
import { database } from "../../config/database";

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
  
  Training.sync({ force: true }).then(() => console.log("Training table created"));

  export interface TrainingInterface {
    name: string;
  }