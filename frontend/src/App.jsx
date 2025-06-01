import React from 'react'
import Dashboard from './components/Dashboard'
import CreateButton from './components/CreateButton'
import CreateForm from './components/CreateForm'
import { getAllTodos } from './services/todo'

function App() {
  const [isFormVisible, setIsFormVisible] = React.useState(false)
  const [todos, setTodos] = React.useState([])

  const toggleForm = () => setIsFormVisible(!isFormVisible)

  React.useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getAllTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
    loadTodos();
  }, [])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <CreateButton onClick={toggleForm} />
      <h1 className='text-2xl mb-5'>nam needs to do something :)</h1>
      <Dashboard todos={todos} setTodos={setTodos} /> 

      {isFormVisible && 
        <CreateForm todos={todos} setTodos={setTodos} onClose={toggleForm} />
      }
    </div>
  )
}

export default App
