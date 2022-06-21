'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      //query to the database
      // this will be a row in a database
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }

  }

  async readOne(id,options) {
    try{
      const objId = parseInt(id);
      let query = {where : {id : objId }, ...options};

      let results = await this.model.findOne(query);
      return results;
    }catch(e){
      console.error(e);
      return e;
    }

  }

  async readAll() {
    try {
      let allInstances = await this.model.findAll();
      return allInstances;
    } catch(err){
      console.error(err);
      return err;
    }
  }

  // not required in lab, but COOOOOOL
  async readWithRelations(id, options) {
    try {
      let query = {where: { id }, ...options };
      let result = await this.model.findOne(query);
      return result;
    } catch(err){
      console.error(err);
      return err;
    }
  }

  async update(id, obj) {
    try{
      const objId = parseInt(id);
      let person = await this.model.findOne({
        where:{ id: objId },
      });
      let updatedPerson = await person.update(obj);
      return updatedPerson;
    }catch(e){
      console.error(e);
    }
  }

  async delete(id) {
    try{
      const objId = parseInt(id);
      let query = { where: { id: objId }};
      let instanceToRemove = await this.model.findOne(query);
      await this.model.destroy(query);
      return instanceToRemove;
    }catch(e){
      console.error(e);
    }
  }
}

module.exports = modelInterface;