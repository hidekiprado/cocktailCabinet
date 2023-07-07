const pg = require("pg");
require("dotenv").config();

const db = new pg.Pool({
  connectionString:
    process.env.PG_ADDRESS ||
    "cocktail_cabinet" ||
    process.env.POSTGRES_URL + "?sslmode=require",
});

module.exports = db;
