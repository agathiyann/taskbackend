const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true }
});


const Taskmodel = mongoose.model("tasks", TaskSchema)

module.exports = Taskmodel
