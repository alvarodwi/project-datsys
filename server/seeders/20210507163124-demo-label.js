"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "labels",
      [
        {
          name: "GA Bunko",
          jpName: "GA文庫",
          link: "http://ga.sbcr.jp/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hero Bunko",
          jpName: "ヒーロー文庫",
          link: "http://bukure.shufunotomo.co.jp/hero/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dengeki Bunko",
          jpName: "電撃文庫",
          link: "http://dengekibunko.dengeki.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("labels", null, { truncate: true });
  },
};
