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
          authorId: 1,
          illustratorId: 1,
          labelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Apothecary Diaries",
          jpTitle: "薬屋のひとりごと",
          plot: "",
          genre: "Drama, Historical, Mystery, Romance, Slice of Life",
          link: "http://herobunko.com/category/books/hero14/",
          authorId: 2,
          illustratorId: 2,
          labelId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "86 -eightysix-",
          jpTitle: "86―エイティシックス―",
          plot: "Action, Drama, Mecha, Science Fiction",
          genre: "Drama, Historical, Mystery, Romance, Slice of Life",
          link: "http://dengekitaisho.jp/special/23/eighty-six/",
          authorId: 3,
          illustratorId: 3,
          labelId: 3,
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
