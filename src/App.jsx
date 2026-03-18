import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-container">
      {/* TODO: Todo List 제목이 들어가는 최상단 */}
      <header>
        <h1>My Todo List</h1>
      </header>

      {/* TODO: 할 일 입력 컴포넌트 */}
      <section className="input-section">
        <input type="text" placeholder="할 일을 입력하세요" />
        <input type="date" /> {/* 기한 선택 */}
        <button>추가</button>
      </section>

      {/* TODO: 할 일 불러오기 컴포넌트 */}
      <ul className="todo-list">
        <li className="todo-item">
          <span>샘플 할 일 (2026-03-18)</span>
          <div className="buttons">
            <button>완료</button>
            <button>삭제</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;