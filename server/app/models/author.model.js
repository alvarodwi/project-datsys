const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Author extends Model {}
  Author.init(
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
      modelName: "author",
    }
  );

  return Author;
};
