import './App.css';
import { useState } from "react";

function TodoForm({ onAdd }) {
    const [text, setText] = useState("")
    return (
      <form className="form" onSubmit={(e)=>{
        e.preventDefault()
        onAdd(text)
        setText("");
    }}>
          <input type="text" placeholder='Add new todo'  value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
          <button>ADD</button>
      </form>
    );
  }
  
  export default TodoForm;