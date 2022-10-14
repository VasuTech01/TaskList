import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
           <h2 style={{textAlign:"center"}}>Pending Tasks</h2>
            <ul className="todo-list">
            {todos.map((todo) => (
                !todo.completed&&<Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;