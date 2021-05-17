/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(334).config();

module.exports = {
  username: "root",
  password: "admin",
  database: "project_datsys",
  port: "3306",
  logging: false,
  host: "localhost",
  dialect: 'mysql',
  operatorsAliases: 0,
  timezone: '+07:00',
};


/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const {Op} = __webpack_require__(121);
const {sequelize} = __webpack_require__(103);
const db = __webpack_require__(103);
const {response, getPagination, getPagingData} = __webpack_require__(741);

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

  const data = await db.Author.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)`,
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

  const result = await db.Author.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(
              `(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)`,
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

  if (!result) return response(res, 404, 'Data Author tidak ditemukan', {});

  response(res, 200, 'success', result);
};

exports.store = async (req, res) => {
  let result = {};

  if (req.params.id) {
    result = await db.Author.findOne({
      where: {id: req.params.id},
      include: {all: true, nested: true},
    });
    if (!result) return response(res, 404, 'Data Author tidak ditemukan', {});
  }

  const data = {
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
      (!req.params.id ? 'Tambah' : 'Ubah') + ` data Author berhasil`,
      await result.toJSON(),
  );
};

exports.delete = async (req, res) => {
  const result = await db.Author.findOne({
    where: {id: req.params.id},
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, 'Data Author tidak ditemukan', {});

  await result.destroy();

  return response(res, 200, 'Data Author berhasil dihapus', {});
};


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const {Op} = __webpack_require__(121);
const {sequelize} = __webpack_require__(103);
const db = __webpack_require__(103);
const {response, getPagination, getPagingData} = __webpack_require__(741);

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


/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const {Op} = __webpack_require__(121);
const {sequelize} = __webpack_require__(103);
const db = __webpack_require__(103);
const {response, getPagination, getPagingData} = __webpack_require__(741);

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


/***/ }),

/***/ 960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const {Op} = __webpack_require__(121);
const {sequelize} = __webpack_require__(103);
const db = __webpack_require__(103);
const {response, getPagination, getPagingData} = __webpack_require__(741);

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


/***/ }),

/***/ 957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const {where} = __webpack_require__(121);
const db = __webpack_require__(103);
const {response, getPagination, getPagingData} = __webpack_require__(741);

exports.get = async (req, res) => {
  const {page, size} = req.query;

  const {limit, offset} = getPagination(page, size);

  const data = await db.Release.findAndCountAll({
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

  response(res, 200, 'success', getPagingData(data, page, limit));
};

exports.detail = async (req, res) => {
  const where = {
    id: req.params.id,
  };

  const result = await db.Release.findOne({
    where: where,
    include: {
      all: true,
    },
  });

  if (!result) return response(res, 404, 'Data Release tidak ditemukan', {});

  response(res, 200, 'success', result);
};

exports.store = async (req, res) => {
  let result = {};

  if (req.params.id) {
    result = await db.Release.findOne({
      where: {id: req.params.id},
      include: {all: true, nested: true},
    });
    if (!result) return response(res, 404, 'Data Release tidak ditemukan', {});
  }

  const data = {
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
      (!req.params.id ? 'Tambah' : 'Ubah') + ` data Release berhasil`,
      await result.toJSON(),
  );
};

exports.delete = async (req, res) => {
  const result = await db.Release.findOne({
    where: {id: req.params.id},
    include: {
      all: true,
      nested: true,
    },
  });
  if (!result) return response(res, 404, 'Data Release tidak ditemukan', {});

  await result.destroy();

  return response(res, 200, 'Data Release berhasil dihapus', {});
};


/***/ }),

/***/ 399:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Model} = __webpack_require__(121);
module.exports = (sequelize, DataTypes) => {
  /**
   * Author model for sequelize
   */
  class Author extends Model {}
  Author.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Author',
      },
  );

  Author.associate = function(models) {
    Author.hasMany(models.Novel, {
      foreignKey: 'authorId',
      as: 'novels',
    });
  };

  Author.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Author;
};


/***/ }),

/***/ 613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Model} = __webpack_require__(121);
module.exports = (sequelize, DataTypes) => {
  /**
   * Illustrator model for sequelize
   */
  class Illustrator extends Model {}

  Illustrator.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Illustrator',
      },
  );

  Illustrator.associate = function(models) {
    Illustrator.hasMany(models.Novel, {
      foreignKey: 'illustratorId',
      as: 'novels',
    });
  };

  Illustrator.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Illustrator;
};


/***/ }),

/***/ 103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {Sequelize} = __webpack_require__(121);
const config = __webpack_require__(176);
const db = {};
const sequelize = new Sequelize(config);

const modules = [
  __webpack_require__(399),
  __webpack_require__(613),
  __webpack_require__(869),
  __webpack_require__(259),
  __webpack_require__(724),
];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize, config);
  db[model.name] = model;
});

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const sequelizeOptions = {logging: console.log};

sequelize.sync(sequelizeOptions).catch((err) => {
  console.log(err);
  process.exit();
});

module.exports = db;

// https://stackoverflow.com/questions/62556633/sequelize-6-import-models-from-file


/***/ }),

/***/ 869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Model} = __webpack_require__(121);
module.exports = (sequelize, DataTypes) => {
  /**
   * Label model for sequelize
   */
  class Label extends Model {}
  Label.init(
      {
        name: DataTypes.STRING,
        jpName: DataTypes.STRING,
        link: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Label',
      },
  );

  Label.associate = function(models) {
    Label.hasMany(models.Novel, {
      foreignKey: 'labelId',
      as: 'novels',
    });
  };

  Label.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Label;
};


/***/ }),

/***/ 259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Model} = __webpack_require__(121);
module.exports = (sequelize, DataTypes) => {
  /**
   * Novel model for sequelize
   */
  class Novel extends Model {}
  Novel.init(
      {
        title: DataTypes.STRING,
        jpTitle: DataTypes.STRING,
        plot: DataTypes.TEXT,
        genre: DataTypes.STRING,
        link: DataTypes.STRING,
        authorId: DataTypes.INTEGER,
        illustratorId: DataTypes.INTEGER,
        labelId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Novel',
      },
  );

  Novel.associate = function(models) {
    Novel.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
    });
    Novel.belongsTo(models.Illustrator, {
      foreignKey: 'illustratorId',
      as: 'illustrator',
    });
    Novel.belongsTo(models.Label, {
      foreignKey: 'labelId',
      as: 'label',
    });
    Novel.hasMany(models.Release, {
      foreignKey: 'novelId',
      as: 'releases',
    });
  };

  Novel.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Novel;
};


/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {Model} = __webpack_require__(121);
module.exports = (sequelize, DataTypes) => {
  /**
   * Release model for sequelize
   */
  class Release extends Model {}
  Release.init(
      {
        volumeNumber: DataTypes.STRING,
        date: DataTypes.DATE,
        coverUrl: DataTypes.STRING,
        page: DataTypes.INTEGER,
        storeUrl: DataTypes.STRING,
        novelId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Release',
      },
  );

  Release.associate = function(models) {
    Release.belongsTo(models.Novel, {
      foreignKey: 'novelId',
      as: 'novel',
    });
  };

  Release.prototype.toJSON = function() {
    return Object.assign({}, this.get());
  };

  return Release;
};


/***/ }),

/***/ 261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(127);
const router = new express.Router();

const controller = __webpack_require__(591);

router.get('/', controller.get);
router.post('/', controller.store);
router.get('/:id', controller.detail);
router.post('/:id', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(127);
const router = new express.Router();

const controller = __webpack_require__(551);

router.get('/', controller.get);
router.post('/', controller.store);
router.get('/:id', controller.detail);
router.post('/:id', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;


/***/ }),

/***/ 169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(127);
const router = new express.Router();

const controller = __webpack_require__(569);

router.get('/', controller.get);
router.post('/', controller.store);
router.get('/:id', controller.detail);
router.post('/:id', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;


/***/ }),

/***/ 802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(127);
const router = new express.Router();

const controller = __webpack_require__(960);

router.get('/', controller.get);
router.post('/', controller.store);
router.get('/:id', controller.detail);
router.post('/:id', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;


/***/ }),

/***/ 879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(127);
const router = new express.Router();

const controller = __webpack_require__(957);

router.get('/', controller.get);
router.post('/', controller.store);
router.get('/:id', controller.detail);
router.post('/:id', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;


/***/ }),

/***/ 741:
/***/ ((__unused_webpack_module, exports) => {

exports.response = (res, code, message, data) => {
  if (!data) data = {};

  if (code != 200) {
    if (data.length) data = {error: data};
    else data = {};

    return res.status(code).json({
      code: code,
      message: message,
      data: data,
    });
  } else {
    return res.status(code).json({
      code: code,
      message: message,
      data: data,
    });
  }
};

exports.getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return {limit, offset};
};

exports.getPagingData = (data, page, limit) => {
  const {count: totalItems, rows: result} = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {result, currentPage, totalPages, totalItems};
};


/***/ }),

/***/ 479:
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ 334:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 127:
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 121:
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const path = __webpack_require__(622);
const express = __webpack_require__(127);
const cors = __webpack_require__(479);
const app = express();

app.use(
    cors({origin: '*'}),
    express.json(),
    express.urlencoded({
      extended: true,
    }),
);

app.use('/api/author', __webpack_require__(261));
app.use('/api/illustrator', __webpack_require__(322));
app.use('/api/label', __webpack_require__(169));
app.use('/api/novel', __webpack_require__(802));
app.use('/api/release', __webpack_require__(879));

app.use(express.static(path.join(__dirname, './views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

const port = process.env.PORT || '8090';

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


})();

/******/ })()
;