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

  const data = await db.Label.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM novels n WHERE label.id = n.labelId)`,
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

  const result = await db.Label.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(`(SELECT COUNT(*) FROM novels n 
          WHERE label.id = n.labelId)`),
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

  if (!result) return response(res, 404, 'Data Label tidak ditemukan', {});

  response(res, 200, 'success', result);
};

exports.store = async (req, res) => {
  let result = {};

  if (req.params.id) {
    result = await db.Label.findOne({
      where: {id: req.params.id},
      include: {all: true, nested: true},
    });
    if (!result) return response(res, 404, 'Data Label tidak ditemukan', {});
  }

  const data = {
    name: req.body.name,
    jpName: req.body.jpName,
    link: req.body.link,
  };

  if (req.params.id) {
    await result.update(data);
  } else {
    result = await db.Label.create(data);
  }

  response(
      res,
      200,
      (!req.params.id ? 'Tambah' : 'Ubah') + ` data Label berhasil`,
      await result.toJSON(),
  );
};

exports.delete = async (req, res) => {
  const result = await db.Label.findOne({
    where: {id: req.params.id},
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, 'Data Label tidak ditemukan', {});

  await result.destroy();

  return response(res, 200, 'Data Label berhasil dihapus', {});
};
