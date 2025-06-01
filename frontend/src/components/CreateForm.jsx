import React from 'react';
import { createTodo } from '../services/todo';

const CreateForm = ({ todos, setTodos, onClose }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    try {
      const response = await createTodo({ title, description });
      setTitle('');
      setDescription('');
      if (response.status === 201) {
        setTodos([response.data, ...todos]);
        alert('Todo created successfully!');
      }
      onClose();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div 
      className='fixed top-0 left-0 w-full h-full bg-[#b8ccc980] backdrop-blur-sm flex justify-center items-center z-50 px-4'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className='bg-[#dce7e5] rounded-xl shadow-lg p-6 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-[#2e3a40] mb-5 text-center'>New Task</h2>

        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            type='text'
            placeholder='Task name'
            className='border border-[#c3d3d0] bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9cbab6] text-[#2e3a40] placeholder:text-[#9baaaa] transition'
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description (optional)'
            className='border border-[#c3d3d0] bg-white rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#9cbab6] text-[#2e3a40] placeholder:text-[#9baaaa] transition'
          />

          <div className='flex justify-end space-x-3 pt-2'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 rounded-lg text-[#2e3a40] bg-transparent hover:bg-[#c7dcd8] transition-colors duration-200 cursor-pointer'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-[#a4c1be] text-white px-4 py-2 rounded-lg hover:bg-[#8fb1ae] transition-colors duration-200 cursor-pointer'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
