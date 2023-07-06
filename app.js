const express = require("express");
const db = require("./db/db");
const { expressSession, pgSession } = require("./session");
const cocktailsController = require("./controller/cocktails");
const usersController = require("./controller/users");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static("client"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `I am getting a request with method: ${req.method} and route: ${
      req.path
    } at ${new Date()}`
  );
  next();
});

app.use(
  expressSession({
    store: new pgSession({
      pool: db, // Connects to our postgres db
      createTableIfMissing: true, // Creates a session table in your database (go look at it!)
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    // secret: "223jl23l",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", cocktailsController);
app.use("/", usersController);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
