const csvtojson = require("csvtojson");

async function dataArr() {
  const jsonArr = await csvtojson().fromFile("Q:/codeStacy/EVE API/typeids.csv");
  // const jsonArr = await csvtojson().fromFile("../typeids.csv");

  const result = [];

  for (let item of jsonArr) {
    const data = Object.values(item);
    const valueObj = {};
    valueObj["item_name"] = data[1];
    valueObj["type_id"] = data[0];
    result.push(valueObj);
  }
  console.log(result[20000], result[40000], result[20001], result[40001])
  // return result.slice(40000);
}

// dataArr()


module.exports = {
  dataArr,
};

// would useing a database be better? To send result from dataArr() to database and the run search querys for data?
// want to serach with string from input field to find typeid then make another API call with the typeid returned from search querry passed into API call to find item price. 

// could fs write a new file with array of data on it? would this be faster to querry than API call to PostgreSQL database?
