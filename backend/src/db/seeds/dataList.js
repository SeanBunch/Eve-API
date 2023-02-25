/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const  { dataArr }  = require("../../dataArr")


exports.seed = async function (knex) {
  const data = await dataArr()

  return knex("typeid_list").insert(data)
  // .raw("TRUNCATE TABLE typeid_list RESTART IDENTITY CASCADE")
  // .then(function() {
  //   return knex("typeid_list").insert(dataArr);
  // })

  // try / catch to find chunk size automagicaly?
  // could I loop though the data array in chunks to insert on each iteration?
  // could I loop through data all at once and insert?

};
