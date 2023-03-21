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
  
  // const { item_name } = req.query
  // const data =  service.search({ item_name })
  // const data =  req

  console.log("controller reached here is req:", data);
  res.json({ data });
}

module.exports = {
  list,
  search,
  // search: [findItemId, search],
};
