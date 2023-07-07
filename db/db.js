const pg = require("pg");
require("dotenv").config();

const db = new pg.Pool({
  connectionString: process.env.PG_ADDRESS || "cocktail_cabinet",
});

module.exports = db;
