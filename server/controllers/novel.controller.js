const {Op} = require('sequelize');
const {sequelize} = require('../models/');
const db = require('../models/');
const {response, getPagination, getPagingData} = require('../utils/helpers');

const handleSorting = (sortBy, order) => {
  order = order ? order : 'asc';

  if (sortBy == 'volume_count') {
    return (
      [sequelize.literal('volumeCount'), `${order}`], ['title', `${order}`]
    );
  } else if (sortBy == 'last_release') {
    return (
      [sequelize.literal('lastRelease'), `${order}`], ['title', `${order}`]
    );
  } else {
    return ['title', `${order}`];
  }
};

exports.get = async (req, res) => {
  const {page, size, title, sortBy, order} = req.query;
  const condition = title ? {title: {[Op.like]: `%${title}%`}} : null;
  const sort = sortBy ? [handleSorting(sortBy, order)] : [];

  const {limit, offset} = getPagination(page, size);

  const data = await db.Novel.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM releases r WHERE novel.id = r.novelId)`,
          ),
          'volumeCount',
        ],
        [
          sequelize.literal(
              `(SELECT MAX(r.date) FROM releases r WHERE novel.id = r.novelId)`,
          ),
          'lastRelease',
        ],
        [
          sequelize.literal(
              `(SELECT r.coverUrl FROM releases r 
                WHERE novel.id = r.novelId 
                ORDER BY r.volumeNumber ASC LIMIT 1)`,
          ),
          'coverUrl',
        ],
      ],
    },
    where: condition,
    order: sort,
    limit: limit,
    offset: offset,
    distinct: true,
    include: [
      {
        all: true,
        nested: true,
      },
    ],
  });

  response(res, 200, 'success', getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  const where = {
    id: req.params.id,
  };

  const result = await db.Novel.findOne({
    where: where,
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM releases r WHERE novel.id = r.novelId)`,
          ),
          'volumeCount',
        ],
        [
          sequelize.literal(
              `(SELECT r.coverUrl FROM releases r 
                WHERE novel.id = r.novelId 
                ORDER BY r.volumeNumber ASC LIMIT 1)`,
          ),
          'coverUrl',
        ],
      ],
    },
    include: {
      all: true,
      nested: true,
    },
  });

  if (!result) return response(res, 404, 'Data Novel tidak ditemukan', {});

  response(res, 200, 'success', result);
};

exports.store = async (req, res) => {
  let result = {};

  if (req.params.id) {
    result = await db.Novel.findOne({
      where: {id: req.params.id},
      include: {all: true, nested: true},
    });
    if (!result) return response(res, 404, 'Data Novel tidak ditemukan', {});
  }

  const data = {
    title: req.body.title,
    jpTitle: req.body.jpTitle,
    plot: req.body.plot,
    genre: req.body.genre,
    link: req.body.link,
    authorId: req.body.authorId,
    illustratorId: req.body.illustratorId,
    labelId: req.body.labelId,
  };

  if (req.params.id) {
    await result.update(data);
  } else {
    result = await db.Novel.create(data);
  }

  response(
      res,
      200,
      (!req.params.id ? 'Tambah' : 'Ubah') + ` data Novel berhasil`,
      await result.toJSON(),
  );
};

exports.delete = async (req, res) => {
  const result = await db.Novel.findOne({
    where: {id: req.params.id},
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, 'Data Novel tidak ditemukan', {});

  await result.destroy();

  return response(res, 200, 'Data Novel berhasil dihapus', {});
};
