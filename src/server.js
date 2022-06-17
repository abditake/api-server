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
  name: 'abdi',
  age: 42,
  eyeColor: 'brown',
};

describe('Testing REST API', () => {

  test('Create a person', async() => {
    let response = await mockRequest.post('/clothes').send(person);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('abdi');
    expect(response.body.age).toEqual(42);
    expect(response.body.eyeColor).toEqual('brown');
  });

  test('Should read from people', async () => {
    
    expect(true).toBe(false);
  });

  test('Should update a person', () => {
    expect(true).toBe(false);
  });

  test('Should delete a person', () => {
    expect(true).toBe(false);
  });
});
