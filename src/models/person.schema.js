'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    eyeColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
