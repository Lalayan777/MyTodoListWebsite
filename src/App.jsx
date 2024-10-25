import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos] = useState([
    {id:1, text:"Learn JS", isCompleted:false},
    {id:2, text:"Learn CSS", isCompleted:false},
    {id:3, text:"Learn HTML", isCompleted:false}
  ])
  return (
      <div className="cont">
        <header>
        <p>Create TodoList for your day</p>
      </header>
    <div className="App">
      <TodoForm onAdd={(text)=>{
            setTodos([
              ...todos,
              {id: Math.random(), text: text, isCompleted: false}
            ])
      }} />
      <TodoList
       todos={todos} 
       onDelete={(todo)=>{
        setTodos(todos.filter((t)=> t.id !== todo.id))
       }}
       onChange={(newTodo) => {
          setTodos(
             todos.map((todo)=>{
              if (todo.id === newTodo.id) {
                  return newTodo
              }
              return todo
          })
       )
    }}
       />
      <TodoFooter todos={todos} onClear={()=>{
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }} />
    </div>
      </div>
  );
}

export default App;
