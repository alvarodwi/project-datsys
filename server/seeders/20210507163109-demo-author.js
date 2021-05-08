"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Kumo Kagyu",
          jpName: "蝸牛くも",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Natsu Hyuuga",
          jpName: "日向夏",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asato Asato",
          jpName: "安里アサト",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("authors", null, { truncate: true });
  },
};
