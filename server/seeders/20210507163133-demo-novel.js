"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "novels",
      [
        {
          title: "Goblin Slayer",
          jpTitle: "ゴブリンスレイヤー",
          plot: "",
          genre: "Action, Adventure, Drama, Fantasy",
          link: "http://ga.sbcr.jp/sp/goblin_slayer/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Apothecary Diaries",
          jpTitle: "薬屋のひとりごと",
          plot: "",
          genre: "Drama, Historical, Mystery, Romance, Slice of Life",
          link: "http://herobunko.com/category/books/hero14/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("novels", null, { truncate: true });
  },
};
