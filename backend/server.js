const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const utils = require("./utils");
const cors = require("cors");

const app = express();

// add the cors policy
app.use(cors());

app.use(express.json());

app.use((request, response, next) => {
  if (
    request.url == "/register" ||
    request.url == "/login" ||
    request.url == "/user/register" ||
    request.url == "/user/login" ||
    request.url == "/user/searchblog" ||
    request.url == "/user/myblogs" ||
    request.url == "/user/allblogs" 
  ) {
    next();
  } else {
    const token = request.header["token"];
    if (!token || token.length == 0) {
      response.send(utils.createErrorResult("missing token"));
      return;
    }

    try {
      const payload = jwt.verify(token, config.secret);
      request.userId = payload["id"];
      next();
    } catch (ex) {
      response.send(utils.createErrorResult("invalid token"));
    }
  }
});
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(4009, "0.0.0.0", () => {
  console.log("server started on 4009");
});
