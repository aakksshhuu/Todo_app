import React from 'react';
import Do from './do'
const List =({setTodos, todos,filteredTodos}) =>
{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            { todos.map( (todo) => (
                <Do setTodos={setTodos} 
                todos={todos} key={todo.id} 
                todo={todo} 
                text={todo.text} />
            ))}
        </ul>
        </div>
    );
}
export default List;