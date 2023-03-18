function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    messgae: `${req.method} not allowed for ${req.originalUrl}`,
  });
}

module.exports = methodNotAllowed;