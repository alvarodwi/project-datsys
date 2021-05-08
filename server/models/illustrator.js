"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Illustrator extends Model {}

  Illustrator.init(
    {
      name: DataTypes.STRING,
      jpName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Illustrator",
    }
  );

  Illustrator.associate = function (models) {
    Illustrator.hasMany(models.Novel, {
      foreignKey: "illustratorId",
    });
  };
  return Illustrator;
};
