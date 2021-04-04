import { Sequelize } from "sequelize";
// const TrainingProfileModel = require("./models/training_user.ts");
// const TrainingModel = require("./models/training.ts");
// const TrainingDataModel = require("./models/training_data.ts");
// const ExerciseModel = require("./models/exercise.ts");
// const ExerciseSetModel = require("./models/exercise_set.ts");
// const NamedExerciseSetModel = require("./models/named_exercise_set.ts");
// // const ExerciseModel = require('./models/Exercise.js');


export const database = new Sequelize('jpec_home', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

// const TrainingUser = TrainingProfileModel(sequelize, Sequelize)
// const Training = TrainingModel(sequelize, Sequelize)
// const TrainingData = TrainingDataModel(sequelize, Sequelize)
// const Exercise = ExerciseModel(sequelize, Sequelize)
// const ExerciseSet = ExerciseSetModel(sequelize, Sequelize)
// const NamedExerciseSet = NamedExerciseSetModel(sequelize, Sequelize)


// TrainingProfile.hasMany(Training)
// Training.hasMany(TrainingData);
// Training.belongsTo(TrainingProfile);
// TrainingData.belongsTo(Training);
// Exercise.belongsToMany(Training, {through: 'training_exercise'})
// Training.hasMany(Exercise)
// Exercise.hasMany(ExerciseSet)
// ExerciseSet.belongsToMany(Exercise, {through: 'set_exercise'})
// TrainingData.hasMany(NamedExerciseSet)
// NamedExerciseSet.belongsToMany(TrainingData, {through: 'training_data_exercise_set'})
// NamedExerciseSet.belongsTo(Exercise);

// const connectToDatabase = async () =>{
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

//   //DEV
//   //  sequelize.sync({ force: true })

//   sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`);
//   });
// }

// sequelize.sync().then(() => {
//   console.log(`Database & tables created!`);
// });

// module.exports = {
//   TrainingProfile,
//   Training
// };


  