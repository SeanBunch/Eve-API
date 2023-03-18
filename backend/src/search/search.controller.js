const service = require("./search.service");

function list(req, res, next) {
  async function apiData() {
    console.log("hey");
    const typeList = await service.list();

    res.json({ data: typeList });
  }

  apiData();
}

async function search(req, res, next) {
  // const itemStr = req.query.item_name;
  const data = "res.json search made"
  console.log("console.log search made");
  res.json({ data });
}

module.exports = {
  list,
  search,
  // search: [findItemId, search],
};
