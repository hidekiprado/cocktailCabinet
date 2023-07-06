const pg = require("pg");

const db = new pg.Pool({
  connectionString:
    "postgres://postgres:223jl23l@localhost:5432/cocktail_cabinet" ||
    "cocktail_cabinet",
});
// const db = new pg.Pool({
//   connectionString: process.env.PG_ADDRESS || "cocktail_cabinet",
// });

module.exports = db;
