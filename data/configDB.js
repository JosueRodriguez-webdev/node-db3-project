const knex = require("knex");

const configure = require("../knexfile.js");

const db = knex(configure.development);

module.exports = db;
