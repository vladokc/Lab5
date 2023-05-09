const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('director', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    year_of_birth: {
      type: Sequelize.INTEGER,
    },
  }, {
    timestamps: false,
    tableName: 'director',
  });
};
