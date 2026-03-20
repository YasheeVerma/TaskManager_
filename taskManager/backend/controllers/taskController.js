const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  if (!req.body.title) return res.status(400).json({ msg: "Title required" });
  const task = await Task.create(req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.status = !task.status;
  await task.save();
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};