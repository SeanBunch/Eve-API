const knex = require("../db/connection");

function list() {
    return knex("typeid_list")
    .returning("*")

}

function search(searchValue) {

console.log("service file reached, search made. item_name:", searchValue)
    return knex("typeid_list")
    .where('item_name', 'like', `%${searchValue}%`)
    .select("type_id")
    .select("item_name")
}

module.exports = {
    search,
    list,
}