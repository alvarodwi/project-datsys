const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Book extends Model {}
  Book.init(
    {
      coverUrl: {
        type: Sequelize.STRING,
      },
      releaseDate: {
        type: Sequelize.DATE,
      },
      page: {
        type: Sequelize.INTEGER,
      },
      volumeNumber: {
        type: Sequelize.INTEGER,
      },
      storeUrl: {
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "book",
    }
  );

  return Book;
};
