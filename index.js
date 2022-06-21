'use strict';


const { sequelize, personInterface,foodInterface } = require('./src/models');

const server = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection!!!');
    // if you want to seed, be careful - this will happen every time you start your server
    personInterface.create({ name: 'Ryan', age: 47, eyeColor:'brown' });
    foodInterface.create({ vegetables: 'carrots', meat:'chicken',fruits:'strawberry' });
  })
  .catch(err => console.error(err));

server.start();