'use strict';

const {Sequelize} = require('sequelize');
const config = require('../config/config');
const db = {};
const sequelize = new Sequelize(config);

const modules = [
  require('./author.js'),
  require('./illustrator.js'),
  require('./label.js'),
  require('./novel.js'),
  require('./release.js'),
];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize, config);
  db[model.name] = model;
});

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const sequelizeOptions = {logging: console.log};

sequelize.sync(sequelizeOptions).catch((err) => {
  console.log(err);
  process.exit();
});

module.exports = db;

// https://stackoverflow.com/questions/62556633/sequelize-6-import-models-from-file
