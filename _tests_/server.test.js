'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

let person = {
  name: 'Micheal',
  age: 32,
  eyeColor: 'Hazel',
};

let meal = {
  vegetables: 'potatoes',
  meat: 'chicken',
  fruits: 'apple',
};

describe('Testing REST API', () => {
  describe('Person Route ', () => {
    test('Create a person using POST', async () => {
      let response = await mockRequest.post('/clothes').send(person);
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Micheal');
      expect(response.body.age).toEqual(32);
      expect(response.body.eyeColor).toEqual('Hazel');
    });

    test('Should read from clothes using GET', async () => {

      let response = await mockRequest.get('/clothes');
      expect(response.status).toEqual(200);
    });
    test('Should read one from clothes using GET', async () => {
      let person = await mockRequest.post('/clothes').send({
        name: 'Jordan',
        age: 18,
        eyeColor: 'Blue',
      });
      let response = await mockRequest.get(`/clothes/${person.body.id}`);

      expect(response.status).toEqual(200);
      expect(response.body.id).toEqual(person.body.id);
    });
    test('Should update from clothes using PUT', async () => {
      let response = await mockRequest.put('/clothes/1').send({
        name: 'Abdinasir',
      });

      let updatedResponse = await mockRequest.get('/clothes/1');

      expect(response.status).toEqual(200);
      expect(updatedResponse.body.name).toEqual('Abdinasir');
    });
    test('Should delete from clothes using DELETE', async () => {
      
      let response = await mockRequest.delete(`/clothes/1`);
      expect(response.status).toEqual(200);
    });
  });

  describe('Food Route ', () => {
    test('Create a Meal using POST', async () => {
      let response = await mockRequest.post('/food').send(meal);
      
      
      
      expect(response.status).toEqual(200);
      expect(response.body.vegetables).toEqual('potatoes');
      expect(response.body.meat).toEqual('chicken');
      expect(response.body.fruits).toEqual('apple');
    });

    test('Should read from Food using GET', async () => {

      let response = await mockRequest.get('/food');
      expect(response.status).toEqual(200);
    });
    test('Should read one from Food using GET', async () => {
      let meal = await mockRequest.post('/food').send({
        vegetables: 'potatoes',
        meat: 'chicken',
        fruits: 'apple',
      });
      let response = await mockRequest.get(`/food/${meal.body.id}`);

      expect(response.status).toEqual(200);
      expect(response.body.id).toEqual(meal.body.id);
    });
    test('Should update from Food using PUT', async () => {
      let response = await mockRequest.put('/food/1').send({
        vegetables: 'Celery',
      });

      let updatedResponse = await mockRequest.get('/food/1');

      expect(response.status).toEqual(200);
      expect(updatedResponse.body.vegetables).toEqual('Celery');
    });
    test('Should delete from Food using DELETE', async () => {
      let meal = await mockRequest.post('/food').send({
        vegetables: 'Carrots',
        meat: 'Turkey',
        fruits: 'Cranberries',
      });
      let response = await mockRequest.delete(`/food/${meal.body.id}`);
      expect(response.status).toEqual(200);
    });
  });

});