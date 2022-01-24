import "./App.css";
import { AddTodo } from "./pages/AddTodo";
import { ListTodo } from "./pages/ListTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
