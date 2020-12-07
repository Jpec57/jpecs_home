const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, type) => {
    return sequelize.define('exercise', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        description: type.STRING,
        img: type.STRING,
        // requiredMaterial: type.ARRAY(type.STRING),
        isHold: type.BOOLEAN,
        restAfter: type.INTEGER
    })
  }