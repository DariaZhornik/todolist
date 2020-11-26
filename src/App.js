import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList.js'
import Context from './context.js'
import AddTodo from './Todo/AddTodo.js'

function App() {
  const [todos, setTodos] = React.useState([])


  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false
    }]))
  }

  const now = new Date().getDate();
  const month = new Date().getMonth();

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>{now}.{month + 1}</h1>
      <AddTodo onCreate={addTodo} />
      { todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos!</p>}  
    </div>
    </Context.Provider>
  );
}

export default App;
