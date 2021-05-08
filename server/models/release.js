"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Release extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Release.belongsTo(models.Novel);
    }
  }
  Release.init(
    {
      volumeNumber: DataTypes.STRING,
      date: DataTypes.DATE,
      coverUrl: DataTypes.STRING,
      page: DataTypes.INTEGER,
      storeUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Release",
    }
  );
  return Release;
};
