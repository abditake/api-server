'use strict';


const { Sequelize, DataTypes } = require('sequelize');

const personSchema = require('./person.schema');
const foodSchema = require('./food.schema');
const modelInterface = require('./modelInterface');

// if password necessary:  postgres://user:password@localhost:5432/401d46-api-app
// ternary:  WTF
const DATABASE_URL = 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// all the models could be created adn exported in THIS file!
// create Person Model
const personModel = personSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);

// Creating association

personModel.hasMany(foodModel, {foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(personModel, {foreignKey: 'customerId', targetKey: 'id'});


module.exports = {
  sequelize,
  personInterface: new modelInterface(personModel),
  foodInterface: new modelInterface(foodModel),
};
