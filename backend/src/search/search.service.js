const knex = require("../db/connection");

function list() {
    return knex("typeid_list")
    .returning("*")

}

function search(item_name) {
    return knex("typeid_list")
    .whereRaw()
    .orderBy("item_name")
}

module.exports = {
    search,
    list,
}