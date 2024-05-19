const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    dueDate: req.body.dueDate,
    emoji: req.body.emoji,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a specific todo
router.get('/:id', getTodo, (req, res) => {
  res.json(res.todo);
});

// PUT (update) a todo
router.put('/:id', getTodo, async (req, res) => {
  if (req.body.title != null) {
    res.todo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  if (req.body.completed != null) {
    res.todo.completed = req.body.completed;
  }
  if (req.body.dueDate != null) {
    res.todo.dueDate = req.body.dueDate;
  }
  if (req.body.emoji != null) {
    res.todo.emoji = req.body.emoji;
  }

  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a todo
router.delete('/:id', getTodo, async (req, res) => {
  console.log(`Deleting todo with ID: ${req.params.id}`);
  try {
    await res.todo.deleteOne();
    res.json({ message: 'Deleted Todo' });
  } catch (err) {
    console.error(`Error deleting todo: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

async function getTodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }
  } catch (err) {
    console.error(`Error finding todo: ${err.message}`);
    return res.status(500).json({ message: err.message });
  }
  res.todo = todo;
  next();
}

module.exports = router;
