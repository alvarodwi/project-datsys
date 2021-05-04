const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Series extends Model {}
  Series.init(
    {
      title: {
        type: Sequelize.STRING,
      },
      jpTitle: {
        type: Sequelize.STRING,
      },
      plot: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "series",
    }
  );

  return Series;
};
