import React, { useState } from 'react';

function TodoInput({ onCreate }) {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const onClickSubmit = () => {
    // 빈 칸이면 추가 안 함
    if (content === "") return;
    // 부모에게 전달
    onCreate(content, date);
    // 입력창 초기화
    setContent("");
  };

  return (
    <div className="todo-input">
      <input 
        value={content}
        onChange={(e) => setContent(e.target.value)} 
        placeholder="할 일을 입력하세요" 
      />
      <input 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={onClickSubmit}>추가</button>
    </div>
  );
}

export default TodoInput;