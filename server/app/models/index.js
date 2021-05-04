const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const { dialect } = require("../config/db.config.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.author = require("./author.model.js")(sequelize, Sequelize);
db.illustrator = require("./illustrator.model.js")(sequelize, Sequelize);
db.label = require("./label.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);
db.book = require("./book.model.js")(sequelize, Sequelize);

//relational
db.series.hasOne(db.author);
db.series.hasOne(db.illustrator);
db.series.hasOne(db.label);
db.series.hasMany(db.book);

module.exports = db;
