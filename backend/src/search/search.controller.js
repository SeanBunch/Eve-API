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
  const data =  await service.search(searchValue)

  res.json({ data });
}

module.exports = {
  list,
  search,
  // search: [findItemId, search],
};
