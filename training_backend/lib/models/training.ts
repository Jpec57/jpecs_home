import { Model, DataTypes, Sequelize } from "sequelize";
import { database, Exercise } from "../config/database";

// import { TrainingData } from "./training_data";
// import { TrainingUser } from "./training_user";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import sequelize from "sequelize";
import { Column, CreatedAt, HasMany, Table, UpdatedAt } from "sequelize-typescript";


// @Table
// export class Training extends Model {
//   // public id!: number;
//   @Column
//   public name!: string;
//   // public author: TrainingUser;
//   @Column
//   public img: string;
//   @HasMany(() => Exercise)
//   public exercises: Array<Exercise>;
//   @CreatedAt
//   public readonly createdAt!: Date;
//   @UpdatedAt
//   public readonly updatedAt!: Date;
// }

// export const Training = database.define('training', {
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: new DataTypes.STRING(128),
//     allowNull: false,
//   },
//   img: {
//     type: DataTypes.STRING
//   }, 
// });

export interface TrainingInterface {
  name: string;
  // author: TrainingUser;
  img: string;
  exercises: Array<Exercise>;
}