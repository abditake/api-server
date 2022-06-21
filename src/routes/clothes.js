'use strict';


const express = require('express');
const { personInterface } = require('../models');

const router = express.Router();

// create

router.post('/clothes', async (req, res, next) => {
  let person = req.body;

  //query to the database
  let response = await personInterface.create(person);
  res.status(200).send(response);
});

// get
router.get('/clothes', async (req, res, next) => {
  let allPersons = await personInterface.readAll();
  res.status(200).send(allPersons);
});

// get one
router.get('/clothes/:id', async (req, res, next) => {
  let paramsId = req.params.id;
  let personRecords = await personInterface.readOne(paramsId);
  res.status(200).send(personRecords);
});

// put
router.put('/clothes/:id', async (req, res, next) => {
  let personId = parseInt(req.params.id);
  let updatedObj = req.body;
  let updatedPerson = await personInterface.update(personId, updatedObj);
  res.status(200).send(updatedPerson);
});

// delete
router.delete('/clothes/:id', async (req, res, next) => {
  let item = req.params.id;

  let deletePerson = await personInterface.delete(item);
  res.status(200).send(deletePerson);
});

module.exports = router;