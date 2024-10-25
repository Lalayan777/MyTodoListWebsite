import './App.css';
import TodoItem from './TodoItem';

function TodoList({ todos, onChange, onDelete }) {
      return(
        todos.map((todo)=>{
            return(
                <TodoItem
                key={todo.key}
                todo={todo}
                onChange={onChange}
                onDelete={onDelete}
                />
            )
        })
      )            
}
  
  export default TodoList;