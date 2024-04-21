const express = require("express");
const db = require("../db");
const utils = require("../utils");
const crypto = require("crypto-js");
const mailer = require("../mailer");

const jwt = require("jsonwebtoken");
const config = require("../config");

const router = express.Router();

router.post("/register", (request, response) => {
  const { name, email, password } = request.body;

  const query = `insert into user (full_name, email, password) values (?, ?, ? );`;

  const encryptedPassword = String(crypto.SHA256(password));

  db.pool.execute(query, [name, email, encryptedPassword], (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error, "could not register"));
    } else {
      mailer.sendEmail(
        email,
        "Welcome to To-Do list app",
        `<h3>Hi ${name}</h3>
                    <br/>
                    ..
                    ..
                    ..
                    ..
                    <br/>
                    Thank you, Admin
                    `,
        () => {
          response.send(utils.createSuccessResult("user created successfully"));
        }
      );
    }
  });
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;

  const statement = `select id, full_name from user where email = ? and password = ?`;

  const encryptedPassword = String(crypto.SHA256(password));

  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      response.send(utils.createErrorResult(error));
    } else {
      if (users.length == 0) {
        response.send(utils.createErrorResult(error, "invalid email or password"));
      } else {
        const user = users[0];
        if (user["isDeleted"] == 1) {
          response.send(utils.createErrorResult("account was deleted"));
        } else {
          const payload = { id: user.id };

          const token = jwt.sign(payload, config.secret);

          const userData = {
            name: `${user.name}`,
            email,
            token,
          };

          response.send(utils.createSuccessResult(userData));
        }
      }
    }
  });
});

router.get("/allblogs", (request, response) => {
  const query = `select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id;`;
  db.pool.execute(query, (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error, "no blogs found"));
    } else {
      const payload = { id: request.params };
      const token = jwt.sign(payload, config.secret);
      response.send(utils.createSuccessResult(token, result));
      response.send(utils.createSuccessResult(result, "blogs found"));
    }
  });
});

router.post("/searchblog", (request, response) => {
  const { title, contents } = request.body;
  const query = `select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id and blogs.id = any(select blogs.id from blogs where title like '%?%' or contents like '%?%');`;
  db.pool.execute(query, (title, contents), (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error, "blog not found"));
    } else {
      const payload = { id: request.params };
      const token = jwt.sign(payload, config.secret);
      response.send(utils.createSuccessResult(token, result));
    }
  });
});

router.post("/myblogs/:id", (request, response) => {
  const { id } = request.params;
  const query = `select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id and user.id = ?;`;
  db.pool.execute(query, [id], (error, properties) => {
    if (error) {
      response.send(utils.createErrorResult(error, "your blog not found"));
    } else {
      const payload = { id: request.params };
      const token = jwt.sign(payload, config.secret);
      response.send(utils.createSuccessResult(token, result));
    }
  });
});

router.post("/addcategories", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into categories (title, description) values(?, ?)`;
  db.pool.query(statement, [title, description], (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error, "could not add categories"));
    } else {
      const payload = { id: request.params };
      const token = jwt.sign(payload, config.secret);
      response.send(utils.createSuccessResult(token, result));
    }
  });
});

router.post("/newblog", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into blogs (title, contents ) values(?, ?)`;
  db.pool.query(statement, [title, description], (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error, "could not add blog"));
    } else {
      const payload = { id: request.params };
      const token = jwt.sign(payload, config.secret);
      response.send(utils.createSuccessResult(token, result));
    }
  });
});

module.exports = router;
