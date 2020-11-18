const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {

}

User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, { sequelize, modelName: 'user' });

  (async () => {
    await sequelize.sync();
    const jane = await User.create({
      username: 'Jpec',
      birthday: new Date(1996, 11, 28)
    });
    console.log(jane.toJSON());
  })();
