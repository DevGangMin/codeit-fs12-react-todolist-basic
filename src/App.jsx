// src/App.js
import './App.css';
import Header from './component/Header';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;