"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Novel extends Model {}
  Novel.init(
    {
      title: DataTypes.STRING,
      jpTitle: DataTypes.STRING,
      plot: DataTypes.TEXT,
      genre: DataTypes.STRING,
      link: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      illustratorId: DataTypes.INTEGER,
      labelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Novel",
    }
  );

  Novel.associate = function (models) {
    Novel.belongsTo(models.Author, {
      foreignKey: "authorId",
    });
    Novel.belongsTo(models.Illustrator, {
      foreignKey: "illustratorId",
    });
    Novel.belongsTo(models.Label, {
      foreignKey: "labelId",
    });
    Novel.hasMany(models.Release, {
      foreignKey: "novelId",
    });
  };
  return Novel;
};
