module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    vegetables: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fruits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
