import React, { useState } from "react"; 
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: 'complete assignment in 24 hour', checked: true },
    { id: 2, text: 'create shopping cart', checked: false },    
  ]); 

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      const newTodo = { id: todos.length + 1, text: input, checked: false };
      setTodos([...todos, newTodo]);
      // console.log(newTodo);
      // console.log(todos);
      setInput("");
    } else {
      alert("Please Enter a todo ");
    }
  };

  const deleteTodo = (index) => {
    console.log(index);
    const updateTodos = todos.filter((value, id) => {
      // console.log(id !== index);
      return id !== index;
    });
    setTodos(updateTodos);
  };

  const toggleCheck = (index) => {
    const updatedTodos = todos.map((todo, id) => 
      id === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const checkedCount = todos.filter(todo => todo.checked).length;
 

  return (
    <>  <h1 className='text-3xl font-bold underline'>Mange Your To-Do List</h1>
      <form onSubmit={addTodo} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Add a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add
        </button>
        <span className="relative inline-flex">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
            disabled=""
          >
            {todos && todos.length > 0
              ? `Total Todos - ${todos.length}`
              : "OOPs Empty todo "}
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </span>
      </form>
      {todos && todos.length > 0 ? (
        <ul className="list-none py-8">  
            {todos.map((todo,index) =>  (
              
              <Todos key={todo.id} todo={todo} index={index} toggleCheck={toggleCheck} deleteTodo={deleteTodo}/>
           
             
          ))}   
          
           <p className="py-8">Checked To-do: {checkedCount}</p> 
      </ul>
      ) : (
        <p className="py-8">Empty To-Do</p>
      )}
       
    </>
  );
}

export default AddTodo;
