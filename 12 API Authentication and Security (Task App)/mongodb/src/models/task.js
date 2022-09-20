const mongoose = require("mongoose");
const taskschema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

// const me = new User({
//   name: "     mamad2          ",
//   email: "         dick@pussy.com           ",
//   password: "dickandpussy     ",
// });

// me.save()
//   .then(() => {
//     console.log("ME", me);
//   })
//   .catch((error) => {
//     console.log("EROOR", error);
//   });

// const task = new Task({
//   description: "Fucking Alexis Texas and mia khalifa",
//   //   completed: true,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const Task = mongoose.model("task", taskschema);
module.exports = Task;
