import React, {useState, useEffect,useRef} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import CompTodos from './components/CompTodos';
import ContactForm from './components/ContacForm'; 



function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [view, setView] = useState("todos");
 

  // RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    saveLocalTodos();
  }, [todos, status]);

// // FUNCTIONS
//   const filterHandler = ()  => {
//     switch(status){
//       case 'comptodos':
//        // setFilteredTodos(todos.filter(todo => todo.completed === true));
//         setView("comptodos");
//         break;
//       default:
//         setView("todos");
//         //setFilteredTodos(todos);
//         break;    
//     }
//   };

  // Save To Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setFilteredTodos(todos.filter(td => !td.completed));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
      setFilteredTodos(todos.filter(td => !td.completed));
    }
  }
  return (
    <div className="App">
      <header>
        <h3 onClick={() => {
          setView("todos");
        }}>React Todo List App</h3>
      </header>
      <div  className="mcont" style={{ height: "100vh", width: "80vw",position:"relative",top:"2vh",left:"10vw",overflow:"scroll",scrollbarColor:"#ff6f47",scrollbarGutter:"stable"}}>
           {(view==="todos")?(filteredTodos.length>0)?<TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />:<h2 style={{textAlign:"center"}}>No Pending Tasks</h2>:<CompTodos setTodos={setTodos} todos={todos} /> }
      </div>
      {/* <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
      <div style={{ height: "50%",minHeight:"50%", width: "100%" ,minWidth:"40%", border: "2px solid yellow" ,position:"relative",bottom:"10%"}}>
        <CompTodos setTodos={setTodos} todos={todos} />
      </div> */}
      
      {/* <section >
      <ContactForm/>
      </section> */}

      <div style={{height:"15vh",width:"80vw",zIndex:100,position:"fixed",bottom:"2%",left:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} setView={setView}   view={view} />
      </div>
    </div>
  );
}
// , display: "flex", flexDirection: "row", justifyContent: "space-around",
export default App;
