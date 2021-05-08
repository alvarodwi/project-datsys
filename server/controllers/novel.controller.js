const { Op, where } = require("sequelize");
const db = require("../models/");
const { response, getPagination, getPagingData } = require("../utils/helpers");

exports.get = async (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = getPagination(page, size);

  var data = await db.Novel.findAndCountAll({
    where: where,
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
