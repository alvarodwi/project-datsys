'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Illustrator model for sequelize
   */
  class Illustrator extends Model {}

  Illustrator.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Illustrator',
      },
  );

  Illustrator.associate = function(models) {
    Illustrator.hasMany(models.Novel, {
      foreignKey: 'illustratorId',
      as: 'novels',
    });
  };

  Illustrator.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Illustrator;
};
