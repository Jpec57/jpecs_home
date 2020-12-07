module.exports = (sequelize, type) => {
  return sequelize.define('training_profile', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullname: type.STRING
  })
}