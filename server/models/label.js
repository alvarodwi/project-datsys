'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Label model for sequelize
   */
  class Label extends Model {}
  Label.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
        link: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Label',
      },
  );

  Label.associate = function(models) {
    Label.hasMany(models.Novel, {
      foreignKey: 'labelId',
      as: 'novels',
    });
  };

  Label.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Label;
};
