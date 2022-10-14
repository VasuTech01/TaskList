import React,{useRef} from "react";
import emailjs from "@emailjs/browser";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, setView, view }) => {
    const form = useRef();

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        inputText.length && setTodos([
            ...todos, // display already(prevoiusly) existing todos
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        console.log(form.current);
       inputText.length&&emailjs.sendForm("service_d62xd99", "template_sc0wi6v",form.current, "9wvwtVozMhvKJaf1Y").then((result) => {
            console.log("mail sent-",result.text);
        }, (error) => {
            console.log("mail not sent -",error.text);
        });
       
        setView("todos");
        //setInputText('');
        
    };
    const statusHandler = (e) => {
        if (e.target.value === "all") {
            setView("todos");
        } else {
            setView("comptodos")
        }
    }
    
    return (
        <form ref={form} onSubmit={submitTodoHandler} >
            <input value={inputText} onChange={inputTextHandler} name="Task" type="text" className="todo-input" />
            <button  className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler}  name="todos" className="filter-todo">
                    <option value="all" >All Todos</option>
                    <option value="completed" >Completed Todos</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
