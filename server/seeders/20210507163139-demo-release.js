"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "releases",
      [
        {
          volumeNumber: 1,
          page: 352,
          date: "2016-02-15",
          coverUrl: "http://lndb.info/images/lightnovel/2379/7584.jpeg",
          storeUrl: "http://www.amazon.co.jp/dp/4797386150/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: 2,
          page: 360,
          date: "2016-05-14",
          coverUrl: "http://lndb.info/images/lightnovel/2379/8102.jpeg",
          storeUrl: "http://www.amazon.co.jp/dp/4797387521/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: 3,
          page: 296,
          date: "2016-09-14",
          coverUrl: "http://lndb.info/images/lightnovel/2379/8779.jpeg",
          storeUrl: "http://www.amazon.co.jp/dp/479738834X/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: 1,
          page: 344,
          date: "2017-02-10",
          coverUrl: "http://lndb.info/images/lightnovel/2789/8929.jpeg",
          storeUrl: "https://www.amazon.co.jp/dp/4048926667",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: 2,
          page: 280,
          date: "2017-07-07",
          coverUrl: "http://lndb.info/images/lightnovel/2789/9269.jpeg",
          storeUrl: "https://www.amazon.co.jp/dp/4048932322",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: 2,
          page: 328,
          date: "2014-08-29",
          coverUrl: "http://lndb.info/images/lightnovel/838/5283.jpeg",
          storeUrl: "https://www.amazon.co.jp/dp/4072981982",
          novelId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("releases", null, { truncate: true });
  },
};
