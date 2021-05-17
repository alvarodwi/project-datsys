'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Novel model for sequelize
   */
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
        modelName: 'Novel',
      },
  );

  Novel.associate = function(models) {
    Novel.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
    });
    Novel.belongsTo(models.Illustrator, {
      foreignKey: 'illustratorId',
      as: 'illustrator',
    });
    Novel.belongsTo(models.Label, {
      foreignKey: 'labelId',
      as: 'label',
    });
    Novel.hasMany(models.Release, {
      foreignKey: 'novelId',
      as: 'releases',
    });
  };

  Novel.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Novel;
};
