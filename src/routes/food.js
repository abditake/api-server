'use strict';


const express = require('express');
const { foodInterface } = require('../models');

const router = express.Router();

// create

router.post('/food', async (req, res, next) => {
  let meal = req.body;

  //query to the database
  let response = await foodInterface.create(meal);
  res.status(200).send(response);
});

// get
router.get('/food', async (req, res, next) => {
  let allMeals = await foodInterface.readAll();
  res.status(200).send(allMeals);
});

// get one
router.get('/food/:id', async (req, res, next) => {
  let paramsId = req.params.id;
  let allMeals = await foodInterface.readOne(paramsId);
  res.status(200).send(allMeals);
});

// put
router.put('/food/:id', async (req, res, next) => {
  let mealId = parseInt(req.params.id);
  let updatedObj = req.body;
  let updatedPerson = await foodInterface.update(mealId, updatedObj);
  res.status(200).send(updatedPerson);
});

// delete
router.delete('/food/:id', async (req, res, next) => {
  let item = req.params.id;

  let deletePerson = await foodInterface.delete(item);
  res.status(200).send(deletePerson);
});

module.exports = router;