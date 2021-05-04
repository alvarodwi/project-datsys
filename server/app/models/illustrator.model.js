const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Illustrator extends Model {}
  Illustrator.init(
    {
      name: {
        type: Sequelize.STRING,
      },
      jpName: {
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "illustrator",
    }
  );

  return Illustrator;
};
