const express = require("express");
const { generateHash, isValidPassword } = require("../util/hash");
const db = require("../db/db");

const router = express.Router();

// User signup
router.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = generateHash(password);

  db.query("SELECT FROM users WHERE email=$1", [email])
    .then((dbRes) => {
      if (dbRes.rows.length === 1) {
        res.status(400).json({ message: "sorry user already exists" });
      } else {
        const sql = `INSERT INTO users(name, email, password) VALUES($1, $2, $3)`;
        db.query(sql, [name, email, hashedPassword])
          .then(() => {
            res.json({ message: "signup successfully" });
          })
          .catch((err) => {
            res.status(500).json({});
          });
      }
    })
    .catch((err) => {
      res.status(500).json({});
    });
});

// User login
router.post("/api/session", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT id, name, password FROM users WHERE email=$1", [email])
    .then((dbRes) => {
      if (dbRes.rows.length === 0) {
        return res.status(400).json({
          message:
            "The e-mail address and/or password you specified are not correct.",
        });
      }
      const user = dbRes.rows[0];
      const hashedPassword = user.password;
      if (isValidPassword(password, hashedPassword)) {
        req.session.email = email;
        req.session.user_id = user.id;
        req.session.name = user.name;
        return res.json({});
      } else {
        return res.status(400).json({
          message:
            "The e-mail address and/or password you specified are not correct.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({});
    });
});

// Check if user currently logged in
router.get("/api/session", (req, res) => {
  const user_id = req.session.user_id;
  const name = req.session.name;

  if (!user_id || !name) {
    return res.status(401).json({ message: "Unable to log in " });
  } else {
    return res.json({ id: user_id, name: name });
  }
});

// Logout
router.delete("/api/session", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ message: "Unable to log out" });
      } else {
        res.json({ message: "Logout successfully" });
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
