const { Op, where } = require("sequelize");
const db = require("../models");
const { response, getPagination, getPagingData } = require("../utils/helpers");

exports.get = async (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = getPagination(page, size);

  var data = await db.Release.findAndCountAll({
    where: where,
    limit: limit,
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

  var result = await db.Release.findOne({
    where: where,
    include: {
      all: true,
    },
  });

  if (!result) return response(res, 404, "Data Release tidak ditemukan", {});

  response(res, 200, "success", result);
};

exports.store = async (req, res) => {
  var result = {};

  if (req.params.id) {
    result = await db.Release.findOne({
      where: { id: req.params.id },
      include: { all: true, nested: true },
    });
    if (!result) return response(res, 404, "Data Release tidak ditemukan", {});
  }

  var data = {
    volumeNumber: req.body.volumeNumber,
    date: req.body.date,
    coverUrl: req.body.coverUrl,
    page: req.body.page,
    storeUrl: req.body.storeUrl,
    novelId: req.body.novelId,
  };

  if (req.params.id) {
    await result.update(data);
  } else {
    result = await db.Release.create(data);
  }

  response(
    res,
    200,
    (!req.params.id ? "Tambah" : "Ubah") + ` data Release berhasil`,
    await result.toJSON()
  );
};

exports.delete = async (req, res) => {
  var result = await db.Release.findOne({
    where: { id: req.params.id },
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, "Data Release tidak ditemukan", {});

  await result.destroy();

  return response(res, 200, "Data Release berhasil dihapus", {});
};
