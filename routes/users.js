const express = require("express");
const router = express.Router();

// use the middleware "logger"
router.use(logger);

// route for users/
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("Users List");
});

// route for users/new
router.get("/new", (req, res) => {
  //   res.send("User New Form");
  res.render("users/new", { firstName: "Test placeholder" });
});

router.post("/", (req, res) => {
  //   res.send("Create User");
  // "firstName" is the "name" properties of the input of the form
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// route for users/:id
// router.get("/:id", (req, res) => {
//     req.params.id;
//     res.send(`Get user with id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//     req.params.id;
//     res.send(`Update user with id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//     req.params.id;
//     res.send(`Delete user with id ${req.params.id}`);
// });

// chained routes for users/:id
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

// middleware
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

// middleware
function logger(req, res, next) {
  console.log("current url is: ", req.originalUrl);
  next();
}

module.exports = router;
