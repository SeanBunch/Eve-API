const knex = require("../db/connection");

function list() {
    return knex("typeid_list")
    .returning("*")

}

function search(item_name) {

console.log("service file reached, search made. item_name:", item_name)
    return knex("typeid_list")
    .whereLike('item_name', 'like', `%${item_name}%`)
    .select("type_id")
}

module.exports = {
    search,
    list,
}