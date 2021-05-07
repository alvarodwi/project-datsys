"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Novel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Novel.belongsTo(models.Author);
      Novel.belongsTo(models.Illustrator);
      Novel.belongsTo(models.Label);
      Novel.hasMany(models.Release);
    }
  }
  Novel.init(
    {
      title: DataTypes.STRING,
      jpTitle: DataTypes.STRING,
      plot: DataTypes.TEXT,
      genre: DataTypes.STRING,
      link: DataTypes.STRING,
      // authorId: DataTypes.INTEGER,
      // illustratorId: DataTypes.INTEGER,
      // labelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Novel",
    }
  );
  return Novel;
};
