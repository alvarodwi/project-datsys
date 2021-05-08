"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Novels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      jpTitle: {
        type: Sequelize.STRING,
      },
      plot: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.INTEGER,
      },
      illustratorId: {
        type: Sequelize.INTEGER,
      },
      labelId: {
        type: Sequelize.INTEGER,
      },
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
    await queryInterface.dropTable("Novels");
  },
};
