"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {}
  Label.init(
    {
      name: DataTypes.STRING,
      jpName: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Label",
    }
  );

  Label.associate = function (models) {
    Label.hasMany(models.Novel, {
      foreignKey: "labelId",
    });
  };
  return Label;
};
