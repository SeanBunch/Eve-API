const service = require("./search.service");

function list(req, res, next) {
  async function apiData() {
    const typeList = await service.list();

    res.json({ data: typeList });
  }

  apiData();
}

async function search(req, res, next) {
  const searchValue = req.params.item_name;
  const data = await service.search(searchValue);
  res.json({ data });
}

function isStringValid(req, res, next) {
  const searchString = req.params.item_name;
  const dataType = typeof req.params.item_name;
  const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;

  if (dataType !== "string") {
    next({ status: 400, message: "needs to enter a string" });

  } else if (searchString.length > 15 || searchString.length < 4) {
    next({ status: 400, message: "string length must be less than 15 or greater than 3" });

  } else if (specialChars.test(searchString)) {
    next({
      status: 400,
      message: `input cannot include special characters ${specialChars}`,
    });
  }
  next();
}

module.exports = {
  list,
  search: [isStringValid, search],
  // search: [findItemId, search],
};
