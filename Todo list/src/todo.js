
import React , {useState,useEffect} from 'react'
import './todo.css'
import Form from './form'
import List from './list'

function Todo() {

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
 

    return (
      <div className="todo">
        <header>
          <h1>To do List</h1>
        </header>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <List setTodos={setTodos} todos={todos} />
      </div>
    );
  }
  
  export default Todo;