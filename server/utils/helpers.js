exports.response = (res, code, message, data) => {
  if (!data) data = {};

  if (code != 200) {
    if (data.length) data = { error: data };
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

  return { limit, offset };
};

exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: result } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { result, currentPage, totalPages, totalItems };
};
