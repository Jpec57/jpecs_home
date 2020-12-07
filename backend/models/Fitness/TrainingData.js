module.exports = (sequelize, type) => {
    return sequelize.define('training_data', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
  }