const { Sequelize } = require('sequelize');
const TrainingProfileModel = require("./models/Fitness/TrainingProfile.js");
const TrainingModel = require("./models/Fitness/Training.js");
const TrainingDataModel = require("./models/Fitness/TrainingData.js");
const ExerciseModel = require("./models/Fitness/Exercise.js");
const ExerciseSetModel = require("./models/Fitness/ExerciseSet.js");
const NamedExerciseSetModel = require("./models/Fitness/NamedExerciseSet.js");
// const ExerciseModel = require('./models/Exercise.js');


const sequelize = new Sequelize('jpec_home', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

const TrainingProfile = TrainingProfileModel(sequelize, Sequelize)
const Training = TrainingModel(sequelize, Sequelize)
const TrainingData = TrainingDataModel(sequelize, Sequelize)
const Exercise = ExerciseModel(sequelize, Sequelize)
const ExerciseSet = ExerciseSetModel(sequelize, Sequelize)
const NamedExerciseSet = NamedExerciseSetModel(sequelize, Sequelize)


TrainingProfile.hasMany(Training)
Training.hasMany(TrainingData);
Training.belongsTo(TrainingProfile);
TrainingData.belongsTo(Training);
Exercise.belongsToMany(Training, {through: 'training_exercise'})
Training.hasMany(Exercise)
Exercise.hasMany(ExerciseSet)
ExerciseSet.belongsToMany(Exercise, {through: 'set_exercise'})
TrainingData.hasMany(NamedExerciseSet)
NamedExerciseSet.belongsToMany(TrainingData, {through: 'training_data_exercise_set'})
NamedExerciseSet.belongsTo(Exercise);

const connectToDatabase = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  //DEV
//  sequelize.sync({ force: true })
  sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);
  });
}

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  TrainingProfile,
  Training
};


  