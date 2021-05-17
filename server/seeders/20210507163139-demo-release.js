'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'releases',
        [
          {
            volumeNumber: '1',
            date: '2016-02-15',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/713agdixkyL.jpg',
            page: 352,
            storeUrl: 'http://www.amazon.co.jp/dp/4797386150/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2016-05-14',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71TLwD+I8bL.jpg',
            page: 360,
            storeUrl: 'http://www.amazon.co.jp/dp/4797387521/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '3',
            date: '2016-09-14',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71m27PdzUkL.jpg',
            page: 296,
            storeUrl: 'http://www.amazon.co.jp/dp/479738834X/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '1',
            date: '2017-02-10',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71Php57MmWL.jpg',
            page: 344,
            storeUrl: 'https://www.amazon.co.jp/dp/4048926667',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2017-07-07',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81wxveev93L.jpg',
            page: 280,
            storeUrl: 'https://www.amazon.co.jp/dp/4048932322',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2014-08-29',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/91x1Yhj7GiL.jpg',
            page: 328,
            storeUrl: 'https://www.amazon.co.jp/dp/4072981982',
            novelId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '1',
            date: '2019-11-30',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/817Yi37W95L.jpg',
            page: 344,
            storeUrl: 'https://www.amazon.com/dp/1975317955',
            novelId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '3',
            date: '2017-12-09',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71LII4vHIoL.jpg',
            page: 360,
            storeUrl: 'https://www.amazon.co.jp/dp/4048933973',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '4',
            date: '2018-05-10',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81E9EmxWVUL.jpg',
            page: 344,
            storeUrl: 'https://www.amazon.co.jp/dp/4048938304/',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '5',
            date: '2018-10-10',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71PCgGovY2L.jpg',
            page: 392,
            storeUrl: 'https://www.amazon.co.jp//dp/4049120925/',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '6',
            date: '2019-04-10',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71uCi0pIxlL.jpg',
            page: 392,
            storeUrl: 'https://www.amazon.co.jp/dp/4049124610',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '7',
            date: '2019-09-10',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71CNhBZnX6L.jpg',
            page: 312,
            storeUrl: 'https://www.amazon.co.jp/dp/4049127989',
            novelId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '1',
            date: '2019-02-01',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81utEcM-ckL.jpg',
            page: 296,
            storeUrl: 'https://www.amazon.co.jp/dp/4041079411',
            novelId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2019-06-01',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81Gg4aUTfdL.jpg',
            page: 312,
            storeUrl: 'https://www.amazon.co.jp/dp/4041078741',
            novelId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '3',
            date: '2019-11-01',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81rzRDcL3EL.jpg',
            page: 294,
            storeUrl: 'https://www.amazon.co.jp/dp/4041078776',
            novelId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '1',
            date: '2016-12-24',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/A1Q4fig7tCL.jpg',
            page: 368,
            storeUrl: 'https://www.amazon.co.jp/dp/4047343986',
            novelId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2017-03-31',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81vT2wXOnmL.jpg',
            page: 368,
            storeUrl: 'https://www.amazon.co.jp/dp/4047345466',
            novelId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '3',
            date: '2017-09-30',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81Rshw8CD2L.jpg',
            page: 320,
            storeUrl: 'https://www.amazon.co.jp/dp/4047347833',
            novelId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '4',
            date: '2018-06-30',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81iY8SzcvtL.jpg',
            page: 320,
            storeUrl: 'https://www.amazon.co.jp/dp/4047351628',
            novelId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '4',
            date: '2017-01-13',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71TupyErKJL.jpg',
            page: 296,
            storeUrl: 'https://www.amazon.co.jp/dp/4797389559/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '5',
            date: '2017-05-13',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71vy1m4b7hL.jpg',
            page: 320,
            storeUrl: 'https://www.amazon.co.jp/dp/4797391588',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '6',
            date: '2017-09-14',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71CNBKqMC1L.jpg',
            page: 376,
            storeUrl: 'https://www.amazon.co.jp/dp/4797391596/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '7',
            date: '2018-03-14',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71t7X1qPQuL.jpg',
            page: 360,
            storeUrl: 'https://www.amazon.co.jp/dp/4797391618/',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '8',
            date: '2018-10-15',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71q8wHsojFL.jpg',
            page: 352,
            storeUrl: 'https://www.amazon.co.jp/dp/4797398094',
            novelId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '1',
            date: '2014-12-02',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61b9g0yBAJL.jpg',
            page: 356,
            storeUrl: 'https://www.amazon.co.jp/dp/4063814335/',
            novelId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '2',
            date: '2015-05-01',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81aDd1EzlVL.jpg',
            page: 372,
            storeUrl: 'https://www.amazon.co.jp/dp/4063814610/',
            novelId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '3',
            date: '2015-09-02',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71DUD2zRilL.jpg',
            page: 364,
            storeUrl: 'https://www.amazon.co.jp/dp/4063814874/',
            novelId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '4',
            date: '2016-02-02',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61k+2Nuz5oL.jpg',
            page: 332,
            storeUrl: 'https://www.amazon.co.jp/dp/4063815137/',
            novelId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            volumeNumber: '5',
            date: '2016-06-02',
            coverUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71O70-DbVxL.jpg',
            page: 340,
            storeUrl: 'https://www.amazon.co.jp/dp/4063815412/',
            novelId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('releases', null, {truncate: true});
  },
};
