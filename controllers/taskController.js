import Task from "../models/Task.js";

// CREATE
export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// GET ALL
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// UPDATE
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { title, description } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;

    await task.save();
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// COMPLETE
export const completeTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (task.completed) {
      return res.status(400).json({ error: "Task already completed" });
    }

    task.completed = true;
    await task.save();

    res.json(task);
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};