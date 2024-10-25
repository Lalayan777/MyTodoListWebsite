import './App.css';

function TodoFooter({ todos, onClear }) {
    let isComplited = todos.filter((todo) => todo.isCompleted).length
    return (
        <div className="div">
        <span>{todos.length}/{isComplited}</span>
        <button onClick={onClear}>Clear completed</button>
        </div>
    );
  }
  
  export default TodoFooter;