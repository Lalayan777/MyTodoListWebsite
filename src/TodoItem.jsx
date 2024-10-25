import './App.css';

function TodoItem({ todo, onChange, onDelete }) {
    console.log(todo);
    
    return (
      <div className='div'>
        <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
        <p>{todo.text}</p>
        <button onClick={()=>{
                    onDelete(todo)
        }}>X</button>
      </div>
    );
  }
  
  export default TodoItem;