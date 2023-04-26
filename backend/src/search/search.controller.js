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
// console.log(req.params.item_name)
  res.json({ data });
}

function isStringValid(req, res, next) {
  const searchString = req.params.item_name;
  const dataType = typeof req.params.item_name;
  const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/

  function containsSpeclChar(searchString){
    return specialChars.test(searchString)
  }
  console.log("isString was called")


  if(dataType !== "string") {
    next({ status: 400, message: "needs to enter a string" })

  } else if (dataType.length > 15) {
    next({ status: 400, message: "string length must be less than 15" })

  } else if(containsSpeclChar) {
    next({ status: 400, message: `input cannot include special characters ${specialChars}` })

  }

next()
}

module.exports = {
  list,
  search: [isStringValid, search],
  // search: [findItemId, search],
};
