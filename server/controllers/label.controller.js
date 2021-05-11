const { Op } = require("sequelize");
const db = require("../models");
const { response, getPagination, getPagingData } = require("../utils/helpers");

const handleSorting = (sortBy, order) => {
  order = order ? order : "asc";

  if (sortBy == "name") {
    return ["name", `${order}`];
  }
};

exports.get = async (req, res) => {
  const { page, size, name, sort_by, order } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  var sort = sort_by ? [handleSorting(sort_by, order)] : [];

  const { limit, offset } = getPagination(page, size);

  var data = await db.Label.findAndCountAll({
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

  response(res, 200, "success", getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  var where = {
    id: req.params.id,
  };

  var result = await db.Label.findOne({
    where: where,
    include: {
      all: true,
      nested: true,
    },
  });

  if (!result) return response(res, 404, "Data Label tidak ditemukan", {});

  response(res, 200, "success", result);
};

exports.store = async (req, res) => {
  var result = {};

  if (req.params.id) {
    result = await db.Label.findOne({
      where: { id: req.params.id },
      include: { all: true, nested: true },
    });
    if (!result) return response(res, 404, "Data Label tidak ditemukan", {});
  }

  var data = {
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
    (!req.params.id ? "Tambah" : "Ubah") + ` data Label berhasil`,
    await result.toJSON()
  );
};

exports.delete = async (req, res) => {
  var result = await db.Label.findOne({
    where: { id: req.params.id },
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, "Data Label tidak ditemukan", {});

  await result.destroy();

  return response(res, 200, "Data Label berhasil dihapus", {});
};
