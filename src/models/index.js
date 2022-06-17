'use strict';

const clothesSchema = require('./person.schema');
const foodSchema = require('./food.schema');

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
const clothesModel = clothesSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  clothesModel,
  foodModel,
};
