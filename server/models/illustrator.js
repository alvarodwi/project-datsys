"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Illustrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Illustrator.hasMany(models.Novel);
    }
  }
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
  return Illustrator;
};
