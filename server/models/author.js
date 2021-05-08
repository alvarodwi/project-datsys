"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {}
  Author.init(
    {
      name: DataTypes.STRING,
      jpName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Author",
    }
  );

  Author.associate = function (models) {
    Author.hasMany(models.Novel, {
      foreignKey: "authorId",
    });
  };
  return Author;
};
