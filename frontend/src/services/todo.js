import axios from 'axios';

// Base API instance
const api = axios.create({
  baseURL: 'http://localhost:3000/todos',
});

// Get all todos
export const getAllTodos = async () => {
  try {
    const response = await api.get('/');
    return response.data; // array of todos
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Create a new todo
export const createTodo = async (todoData) => {
  try {
    const response = await api.post('/', todoData);
    return response; // newly created todo
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

// Update a todo (e.g. mark completed or edit)
export const updateTodo = async (id, completed) => {
  try {
    const response = await api.put(`/${id}`, { completed }); // expects object: { completed, title, ... }
    return response; // updated todo
  } catch (error) {
    console.error(`Error updating todo [${id}]:`, error);
    throw error;
  }
};

// clear completed todos
export const clearTodo = async () => {
  try {
    const response = await api.delete(`/`);
    return response;
  } catch (error) {
    console.error(`Error clearing todos:`, error);
    throw error;
  }
};

// delete a todo task
export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/${id}`)
    return response;
  } catch (error) {
    console.error(`Error deleting todo:`, error);
    throw error;
  }
}