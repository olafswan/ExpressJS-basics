const express = require("express");
const app = express();

// middleware to display static html pages
app.use(express.static("public"));
// middleware to allow accessing information coming from forms
app.use(express.urlencoded({ extended: true }));
// middleware to allow accessing json information from the body
app.use(express.json());

app.set("view engine", "ejs");

// use the middleware "logger"
// app.use(logger);

// app.get("/", logger, (req, res) => {
//   console.log("here");
//   //   res.status(500).json({ message: "ERROR" });
//   //   res.render("index");
//   res.render("index", { text: "world" });
// });

// variable for the users router
const userRouter = require("./routes/users");
// const postRouter = require("./routes/posts");

// routes for anything starting with /users
app.use("/users", userRouter);
// app.use("/posts", postRouter);

function logger(req, res, next) {
  console.log("url is: ", req.originalUrl);
  next();
}

app.listen(3000);
