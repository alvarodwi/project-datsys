"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "illustrators",
      [
        {
          name: "Shirabi",
          jpName: "しらび",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touko Shino",
          jpName: "しのとうこ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Noboru Kannatuki",
          jpName: "神奈月昇",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Merontomari",
          jpName: "メロントマリ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shiokonbu",
          jpName: "しおこんぶ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("illustrators", null, { truncate: true });
  },
};
