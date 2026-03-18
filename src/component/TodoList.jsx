function TodoList({ todos }) {
  return (
    <div className="todo-list-container">
      <h4>할 일 목록</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.isDone} readOnly />
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
              {todo.content} ({todo.date})
            </span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;