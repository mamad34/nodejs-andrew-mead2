const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routes/user-router");
const taskRouter = require("./routes/task-route");

const app = express();
const port = process.env.PORT || 3000;
// express middle ware
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET Request are disabled");
//   } else {
//     // if dont call next the route never runs
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("We are updating the site thanks for your patinet");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//
// Without middleware : new requset --> run route handler
//
// with middleware : new request -> do somthing -> run route handler
//

// const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("This is from my other router");
// });
// app.use(router);

app.listen(port, () => {
  console.log("Server is Up on port " + port);
});

// const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);
//   const isMatch = await bcrypt.compare("red12345!", hashedPassword);
//   console.log(isMatch);
// };
// myFunction();

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcource", {
    expiresIn: "7 days",
  });
  console.log(token);
  const data = jwt.verify(token, "thisismynewcource");
  console.log(data);
};
myFunction();
