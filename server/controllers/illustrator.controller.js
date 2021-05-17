const {Op} = require('sequelize');
const {sequelize} = require('../models/');
const db = require('../models');
const {response, getPagination, getPagingData} = require('../utils/helpers');

const handleSorting = (sortBy, order) => {
  order = order ? order : 'asc';

  if (sortBy == 'novel_count') {
    return [sequelize.literal('novelCount'), `${order}`], ['name', `${order}`];
  } else {
    return ['name', `${order}`];
  }
};

exports.get = async (req, res) => {
  const {page, size, name, sortBy, order} = req.query;
  const condition = name ? {name: {[Op.like]: `%${name}%`}} : null;
  const sort = sortBy ? [handleSorting(sortBy, order)] : [];

  const {limit, offset} = getPagination(page, size);

  const data = await db.Illustrator.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM novels n 
              WHERE illustrator.id = n.illustratorId)`,
          ),
          'novelCount',
        ],
      ],
    },
    where: condition,
    limit: limit,
    order: sort,
    offset: offset,
    distinct: true,

    include: [
      {
        all: true,
      },
    ],
  });

  response(res, 200, 'success', getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  const where = {
    id: req.params.id,
  };

  const result = await db.Illustrator.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM novels n 
              WHERE illustrator.id = n.illustratorId)`,
          ),
          'novelCount',
        ],
      ],
    },
    where: where,
    include: [
      {
        model: db.Novel,
        as: 'novels',
        include: [
          {
            model: db.Release,
            as: 'releases',
            where: {volumeNumber: 1},
          },
        ],
      },
    ],
  });

  if (!result) {
    return response(res, 404, 'Data Illustrator tidak ditemukan', {});
  }

  response(res, 200, 'success', result);
};

exports.store = async (req, res) => {
  let result = {};

  if (req.params.id) {
    result = await db.Illustrator.findOne({
      where: {id: req.params.id},
      include: {all: true, nested: true},
    });
    if (!result) {
      return response(res, 404, 'Data Illustrator tidak ditemukan', {});
    }
  }

  const data = {
    name: req.body.name,
    jpName: req.body.jpName,
  };

  if (req.params.id) {
    await result.update(data);
  } else {
    result = await db.Illustrator.create(data);
  }

  response(
      res,
      200,
      (!req.params.id ? 'Tambah' : 'Ubah') + ` data Illustrator berhasil`,
      await result.toJSON(),
  );
};

exports.delete = async (req, res) => {
  const result = await db.Illustrator.findOne({
    where: {id: req.params.id},
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) {
    return response(res, 404, 'Data Illustrator tidak ditemukan', {});
  }

  await result.destroy();

  return response(res, 200, 'Data Illustrator berhasil dihapus', {});
};
