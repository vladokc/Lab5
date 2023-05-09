const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'users',
  });
};