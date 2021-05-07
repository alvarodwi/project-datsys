require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  logging: false,
  host: process.env.DB_HOST,
  dialect: "mysql",
  operatorsAliases: 0,
  timezone: "+07:00",
};
