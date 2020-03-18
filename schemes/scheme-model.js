const db = require("../data/configDB.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes").select("*");
} // Done

function findById(id) {
  return db("schemes").where({ id });
} // Done

function findSteps(id) {
  return db("steps").where({ id });
} // Done

function add(body) {
  return db("schemes").insert(body);
} // Done

function addStep(body, id) {
  return db("schemes")
    .where({ id })
    .then(() => {
      return db("steps").insert(body);
    });
} // Done

function update(body, id) {
  return db("schemes")
    .where({ id })
    .update(body);
} // Done

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
} // Done
