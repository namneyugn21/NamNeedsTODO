import React from 'react'
import { updateTodo } from '../services/todo';

const TaskCard = ({ id, title, description, completed, createdAt, todos, setTodos }) => {
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

  return (
    <div className="group relative flex flex-col justify-center items-center bg-[#edf2fb] rounded-xl p-2 mb-3">
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
      <div className='text-xs font-medium bold w-full text-[#778da9] mt-2 hidden group-hover:flex justify-between items-center'>
        <div className='ml-1'>
          <span className="text-xs text-[#c3c8d1]">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </span>  
        </div>
        <div className='mr-1'>
          <span className='cursor-pointer'> Edit</span>
          <span className='mx-1.5'>•</span>
          <span className='text-[#ba5754] cursor-pointer'>Delete</span>
        </div>
      </div>
    </div>
  )
}

export default TaskCard