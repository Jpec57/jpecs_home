import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Exercise } from "./exercice";
import { TrainingData } from "./training_data";
import { TrainingUser } from "./training_user";
import { SEQUELIZE_SYNC_FORCE } from "../constants";
import sequelize from "sequelize";

export class Training extends Model {
  public id!: number;
  public name!: string;
  public author: TrainingUser;
  public img: string;
  public exercises: Array<Exercise>;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public associate: Function;

}

export interface TrainingInterface {
  name: string;
  author: TrainingUser;
  img: string;
  exercises: Array<Exercise>;
}