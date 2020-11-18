const { Sequelize } = require('sequelize');
var User =require("./models/User.ts");


const sequelize = new Sequelize('jpec_home', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


const test = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test().then(()=>{
  (async () => {
    await sequelize.sync();
    const jane = await User.create({
      username: 'Jpec',
      birthday: new Date(1996, 11, 28)
    });
    console.log(jane.toJSON());
  })();
});



  