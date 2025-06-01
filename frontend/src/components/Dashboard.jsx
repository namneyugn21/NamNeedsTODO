import React from 'react';
import { clearTodo } from '../services/todo';
import TaskCard from './TaskCard';

const Dashboard = ({ todos, setTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed);

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
      <div className="text-right pr-2 text-[#5d6f6c] mb-2">
        <span className="text-sm pr-1">{completedTodos.length} Completed •</span>
        <span
          onClick={completedTodos.length === 0 ? undefined : handleClear}
          className={`relative text-sm after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out ${
            completedTodos.length === 0
              ? 'text-[#5d6f6c50] cursor-not-allowed pointer-events-none'
              : 'cursor-pointer hover:after:w-full hover:text-[#3e4c49]'
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
          <TaskCard 
            key={todo._id}
            id={todo._id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            createdAt={todo.createdAt}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      )}
    </div>
  );
};

export default Dashboard;
