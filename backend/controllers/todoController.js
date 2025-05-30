const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    next(error); // pass the error to the next middleware (error handler)
  }
}

exports.createTodo = async (req, res, next) => {
  const { title, description } = req.body;
  const newTodo = new Todo({ title, description }); // Create a new Todo instance

  try {
    await newTodo.save(); // Save the new todo to the database
    res.status(201).json(newTodo);
  } catch (error) {
    next(error); // pass the error to the next middleware (error handler)
  }
}

exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const updatedTodo = await Todo.updateOne({ _id: id }, {$set: { completed }})
    if (updatedTodo.matchedCount === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo updated successfully' });
  } catch (error) {
    next(error); // pass the error to the next middleware (error handler)
  }
}

exports.clearTodo = async (req, res, next) => {
  try {
    await Todo.deleteMany({ completed: true });
    return res.status(200).json({ message: 'Successfully clearing all completed todos!'});
  } catch (error) {
    next(error); // pass the error to the next middleware (error handler)
  }
}