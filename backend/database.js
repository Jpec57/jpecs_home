const { Sequelize } = require('sequelize');
const UserModel = require("./models/User.js");
const TrainingModel = require("./models/Training.js");


const sequelize = new Sequelize('jpec_home', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  storage: './database.sqlite'
});

const User = UserModel(sequelize, Sequelize)
const Training = TrainingModel(sequelize, Sequelize)
// const UserTraining = sequelize.define('user_training', {})

User.hasMany(Training)
// Training.belongsToMany(Blog, { through: BlogTag, unique: false })
Training.belongsTo(User);


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


  