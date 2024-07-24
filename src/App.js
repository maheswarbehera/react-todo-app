
import './App.css';
import AddTodo from './Component/AddTodo';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Todo/> */}
       <AddTodo/>
      </header>
    </div>
  );
}

export default App;
