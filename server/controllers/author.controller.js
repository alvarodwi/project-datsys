const { Op } = require("sequelize");
const { sequelize } = require("../models/");
const db = require("../models/");
const { response, getPagination, getPagingData } = require("../utils/helpers");

const handleSorting = (sortBy, order) => {
  order = order ? order : "asc";

  if (sortBy == "novel_count") {
    return [sequelize.literal("novelCount"), `${order}`], ["name", `${order}`];
  } else {
    return ["name", `${order}`];
  }
};

exports.get = async (req, res) => {
  const { page, size, name, sort_by, order } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  var sort = sort_by ? [handleSorting(sort_by, order)] : [];

  const { limit, offset } = getPagination(page, size);

  var data = await db.Author.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)`
          ),
          "novelCount",
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

  response(res, 200, "success", getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  var where = {
    id: req.params.id,
  };

  var result = await db.Author.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)`
          ),
          "novelCount",
        ],
      ],
    },
    where: where,
    include: [
      {
        model: db.Novel,
        as: "novels",
        include: [
          {
            model: db.Release,
            as: "releases",
            where: { volumeNumber: 1 },
          },
        ],
      },
    ],
  });

  if (!result) return response(res, 404, "Data Author tidak ditemukan", {});

  response(res, 200, "success", result);
};

exports.store = async (req, res) => {
  var result = {};

  if (req.params.id) {
    result = await db.Author.findOne({
      where: { id: req.params.id },
      include: { all: true, nested: true },
    });
    if (!result) return response(res, 404, "Data Author tidak ditemukan", {});
  }

  var data = {
    name: req.body.name,
    jpName: req.body.jpName,
  };

  if (req.params.id) {
    await result.update(data);
  } else {
    result = await db.Author.create(data);
  }

  response(
    res,
    200,
    (!req.params.id ? "Tambah" : "Ubah") + ` data Author berhasil`,
    await result.toJSON()
  );
};

exports.delete = async (req, res) => {
  var result = await db.Author.findOne({
    where: { id: req.params.id },
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, "Data Author tidak ditemukan", {});

  await result.destroy();

  return response(res, 200, "Data Author berhasil dihapus", {});
};
