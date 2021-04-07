import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Exercise } from "./exercice";
import { TrainingData } from "./training_data";
import { TrainingUser } from "./training_user";
import { SEQUELIZE_SYNC_FORCE } from "../constants";

export class Training extends Model {
  public id!: number;
  public name!: string;
  public author: TrainingUser;
  public img: string;
  public exercises: Array<Exercise>;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

export interface TrainingInterface {
  name: string;
  author: TrainingUser;
  img: string;
  exercises: Array<Exercise>;
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
        type: DataTypes.STRING
      },
    },
    {
      tableName: "training",
      sequelize: database, 
    }
  );

//   class TrainingExercise extends Model {
//   } 
//   TrainingExercise.init({},
//     {
//       tableName: 'training_exercise', sequelize: database
//     }
//  );
//  TrainingExercise.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("TrainingExercise table created"));

//  Training.belongsToMany(Exercise, {through: TrainingExercise})
//  Exercise.belongsToMany(Training, { through: TrainingExercise })

export const TrainingExercise = Training.hasMany(Exercise, { as: "exercices" })
export const ExerciseTraining = Exercise.belongsTo(Training, { foreignKey: 'trainingId', as: "training" })

//   Training.hasMany(TrainingData);
// Training.belongsTo(TrainingUser);
  Training.sync({ force: SEQUELIZE_SYNC_FORCE }).then(() => console.log("Training table created"));

