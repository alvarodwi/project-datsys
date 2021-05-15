"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "releases",
      [
        {
          volumeNumber: "1",
          date: "2016-02-15",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/713agdixkyL.jpg",
          page: 352,
          storeUrl: "http://www.amazon.co.jp/dp/4797386150/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "2",
          date: "2016-05-14",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71TLwD+I8bL.jpg",
          page: 360,
          storeUrl: "http://www.amazon.co.jp/dp/4797387521/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "3",
          date: "2016-09-14",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71m27PdzUkL.jpg",
          page: 296,
          storeUrl: "http://www.amazon.co.jp/dp/479738834X/",
          novelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "1",
          date: "2017-02-10",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71Php57MmWL.jpg",
          page: 344,
          storeUrl: "https://www.amazon.co.jp/dp/4048926667",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "2",
          date: "2017-07-07",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81wxveev93L.jpg",
          page: 280,
          storeUrl: "https://www.amazon.co.jp/dp/4048932322",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "2",
          date: "2014-08-29",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91x1Yhj7GiL.jpg",
          page: 328,
          storeUrl: "https://www.amazon.co.jp/dp/4072981982",
          novelId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "1",
          date: "2019-11-30",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/817Yi37W95L.jpg",
          page: 344,
          storeUrl: "https://www.amazon.com/dp/1975317955",
          novelId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "3",
          date: "2017-12-09",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71LII4vHIoL.jpg",
          page: 360,
          storeUrl: "https://www.amazon.co.jp/dp/4048933973",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "4",
          date: "2018-05-10",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81E9EmxWVUL.jpg",
          page: 344,
          storeUrl: "https://www.amazon.co.jp/dp/4048938304/",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "5",
          date: "2018-10-10",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71PCgGovY2L.jpg",
          page: 392,
          storeUrl: "https://www.amazon.co.jp//dp/4049120925/",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "6",
          date: "2019-04-10",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71uCi0pIxlL.jpg",
          page: 392,
          storeUrl: "https://www.amazon.co.jp/dp/4049124610",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "7",
          date: "2019-09-10",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71CNhBZnX6L.jpg",
          page: 312,
          storeUrl: "https://www.amazon.co.jp/dp/4049127989",
          novelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "1",
          date: "2017-06-01",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81U7ANQYfGL.jpg",
          page: 328,
          storeUrl: "https://www.amazon.co.jp/dp/4041056802/",
          novelId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "2",
          date: "2017-12-01",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81PKTdHVt2L.jpg",
          page: 312,
          storeUrl: "https://www.amazon.co.jp/dp/4041056810/",
          novelId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "3",
          date: "2018-04-01",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81Plo-CLhTL.jpg",
          page: 328,
          storeUrl: "https://www.amazon.co.jp/dp/4041065240",
          novelId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "4",
          date: "2018-09-01",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81NEe2eKoFL.jpg",
          page: 312,
          storeUrl: "https://www.amazon.co.jp/gp/product/4041065216",
          novelId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          volumeNumber: "5",
          date: "2019-02-01",
          coverUrl:
            "https://images-na.ssl-images-amazon.com/images/I/818uMBDYj8L.jpg",
          page: 296,
          storeUrl: "https://www.amazon.co.jp/dp/4041075599/",
          novelId: 5,
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
