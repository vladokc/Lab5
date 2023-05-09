const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('genre', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'genre',
  });
};
