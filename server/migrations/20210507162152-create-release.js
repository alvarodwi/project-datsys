"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Releases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      volumeNumber: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      coverUrl: {
        type: Sequelize.STRING,
      },
      page: {
        type: Sequelize.INTEGER,
      },
      storeUrl: {
        type: Sequelize.STRING,
      },
      // novelId: {
      //   type: Sequelize.INTEGER
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Releases");
  },
};
