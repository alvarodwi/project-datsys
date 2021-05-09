const { Op } = require("sequelize");
const { sequelize } = require("../models/");
const db = require("../models/");
const { response, getPagination, getPagingData } = require("../utils/helpers");

const handleSorting = (sortBy, order) => {
  order = order ? order : "asc";

  if (sortBy == "title") {
    return ["title", `${order}`];
  } else if (sortBy == "total_volume") {
    return [sequelize.literal("totalVolume"), `${order}`];
  } else if (sortBy == "last_release") {
    return [sequelize.literal("lastRelease"), `${order}`];
  }
};

exports.get = async (req, res) => {
  const { page, size, title, sort_by, order } = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var sort = sort_by ? [handleSorting(sort_by, order)] : [];

  const { limit, offset } = getPagination(page, size);

  var data = await db.Novel.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(`(SELECT COUNT(*)
        FROM releases r
        WHERE novel.id = r.novelId)`),
          "totalVolume",
        ],
        [
          sequelize.literal(`(SELECT MAX(r.date)
        FROM releases r
        WHERE novel.id = r.novelId)`),
          "lastRelease",
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

  response(res, 200, "success", getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  var where = {
    id: req.params.id,
  };

  var result = await db.Novel.findOne({
    where: where,
    include: {
      all: true,
      nested: true,
    },
  });

  if (!result) return response(res, 404, "Data Novel tidak ditemukan", {});

  response(res, 200, "success", result);
};

exports.store = async (req, res) => {
  var result = {};

  if (req.params.id) {
    result = await db.Novel.findOne({
      where: { id: req.params.id },
      include: { all: true, nested: true },
    });
    if (!result) return response(res, 404, "Data Novel tidak ditemukan", {});
  }

  var data = {
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
    (!req.params.id ? "Tambah" : "Ubah") + ` data Novel berhasil`,
    await result.toJSON()
  );
};

exports.delete = async (req, res) => {
  var result = await db.Novel.findOne({
    where: { id: req.params.id },
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, "Data Novel tidak ditemukan", {});

  await result.destroy();

  return response(res, 200, "Data Novel berhasil dihapus", {});
};
