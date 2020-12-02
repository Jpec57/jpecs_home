const { Sequelize } = require('sequelize');
const UserModel = require("./models/User.js");
const TrainingModel = require("./models/Training.js");
const TrainingDataModel = require("./models/TrainingData.js");
const ExerciseModel = require("./models/Exercise.js");
const ExerciseSetModel = require("./models/ExerciseSet.js");
const NamedExerciseSetModel = require("./models/NamedExerciseSet.js");
// const ExerciseModel = require('./models/Exercise.js');


const sequelize = new Sequelize('jpec_home', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

const User = UserModel(sequelize, Sequelize)
const Training = TrainingModel(sequelize, Sequelize)
const TrainingData = TrainingDataModel(sequelize, Sequelize)
const Exercise = ExerciseModel(sequelize, Sequelize)
const ExerciseSet = ExerciseSetModel(sequelize, Sequelize)
const NamedExerciseSet = NamedExerciseSetModel(sequelize, Sequelize)


User.hasMany(Training)
Training.hasMany(TrainingData);
Training.belongsTo(User);
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
  User,
  Training
};


  