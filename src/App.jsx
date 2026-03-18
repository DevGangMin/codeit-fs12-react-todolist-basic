import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // 새로운 할 일을 추가하는 함수
  const onCreate = (content, date) => {
    const newTodo = {
      id: Date.now(),
      isDone: false,
      content: content,
      date: date,
    };
    // 기존 목록 앞에 새 할 일 추가
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      {/* TodoInput에 추가 함수를 전달 */}
      <TodoInput onCreate={onCreate} />
      {/* TodoList에 할 일 데이터 전달 */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
