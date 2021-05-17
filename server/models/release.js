'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Release model for sequelize
   */
  class Release extends Model {}
  Release.init(
      {
        volumeNumber: DataTypes.STRING,
        date: DataTypes.DATE,
        coverUrl: DataTypes.STRING,
        page: DataTypes.INTEGER,
        storeUrl: DataTypes.STRING,
        novelId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Release',
      },
  );

  Release.associate = function(models) {
    Release.belongsTo(models.Novel, {
      foreignKey: 'novelId',
      as: 'novel',
    });
  };

  Release.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Release;
};
