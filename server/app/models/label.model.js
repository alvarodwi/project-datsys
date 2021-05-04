const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Label extends Model {}
  Label.init(
    {
      name: {
        type: Sequelize.STRING,
      },
      jpName: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "label",
    }
  );

  return Label;
};
