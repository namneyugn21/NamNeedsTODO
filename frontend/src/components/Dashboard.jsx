import React from 'react';
import { clearTodo, updateTodo } from '../services/todo';

const Dashboard = ({ todos, setTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed);

  const handleCheck = async (id) => {
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

  const handleClear = async () => {
    try {
      const response = await clearTodo();
      if (response.status === 200) {
        alert('Successfully cleared all the checked todos! Good job!');
        setTodos(todos.filter(todo => !todo.completed));
      }
    } catch (error) {
      console.error("Error clearing todos:", error);
    }
  };

  return (
    <div className="w-full max-w-[310px]">
      <div className="text-right pr-2 text-[#778da9] mb-2">
        <span className="text-sm pr-1">{completedTodos.length} Completed •</span>
        <span
          onClick={completedTodos.length === 0 ? undefined : handleClear}
          className={`relative text-sm after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-200 ${
            completedTodos.length === 0
              ? 'text-[#778da981] cursor-not-allowed pointer-events-none'
              : 'cursor-pointer hover:after:w-full'
          }`}
        >
          Clear
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="flex flex-col justify-center items-center bg-[#edf2fb] rounded-xl p-2 mb-3">
          <p className="text-center text-gray-400 flex items-start bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3 w-full transition duration-300 hover:shadow-md">Nothing to do... yet 👀</p>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-col justify-center items-center bg-[#edf2fb] rounded-xl p-2 mb-3"
          >
            <div className="flex items-start bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3 w-full transition duration-300 hover:shadow-md">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo._id)}
                className="mt-1 mr-4 cursor-pointer accent-blue-500 h-4 w-4"
              />
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {todo.title}
                </span>
                <span className="text-sm text-gray-500">{todo.description}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
