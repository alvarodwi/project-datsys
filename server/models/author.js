'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Author model for sequelize
   */
  class Author extends Model {}
  Author.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Author',
      },
  );

  Author.associate = function(models) {
    Author.hasMany(models.Novel, {
      foreignKey: 'authorId',
      as: 'novels',
    });
  };

  Author.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Author;
};
