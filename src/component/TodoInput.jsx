function TodoInput() {
  return (
    <div className="todo-input">
      <input type="text" placeholder="할 일을 입력하세요" />
      <input type="date" />
      <button type="button">추가</button>
    </div>
  );
}

export default TodoInput;