import React from 'react'
import { updateTodo, deleteTodo } from '../services/todo';

const TaskCard = ({ id, title, description, completed, createdAt, todos, setTodos }) => {
  // trigger when the user clicked the checkbox
  const handleCheck = async () => {
    try {
      // Toggle the completion on backend
      const current = todos.find(todo => todo._id === id);
      const response = await updateTodo(id, !current.completed);

      if (response.status === 200) {
        // Update local state
        const updatedTodos = todos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // trigger when the user want to delete the task
  const handleDelete = async () => {
    try {
      // get the selected todo
      const response = await deleteTodo(id);

      // if the deletion is succeed, then the server will response 204
      // and we can just filter out the deleted todo
      if (response.status === 204) {
        const updatedTodos = todos.filter(todo => todo._id !== id);
        setTodos(updatedTodos);
        alert('Successfully deleted a task!')
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  return (
    <div className="group relative flex flex-col items-center bg-[#edf2fb] rounded-xl p-2 mb-3">
      {/* main content */}
      <div className="flex items-start bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3 w-full transition duration-300 hover:shadow-md">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheck}
          className="mt-1 mr-4 cursor-pointer accent-blue-500 h-4 w-4"
        />
        <div className="flex flex-col">
          <span className={`text-sm font-semibold ${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {title}
          </span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>

      {/* action buttons: delete and edit */}
      <div className="text-xs font-normal w-full text-[#778da9] flex justify-end items-center pt-2">
        <span className="text-xs text-[#c3c8d1] absolute left-56 transition-all ease-in-out duration-500 group-hover:left-3.5">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <div className="mr-1 transform transition-all duration-500 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="cursor-pointer hover:underline font-medium">Edit</span>
          <span className="mx-1.5">•</span>
          <span className="text-[#ba5754] cursor-pointer hover:underline font-medium" onClick={handleDelete}>Delete</span>
        </div>
      </div>

    </div>
  )
}

export default TaskCard