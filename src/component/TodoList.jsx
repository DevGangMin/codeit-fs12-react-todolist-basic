import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <div className="todo-list-container">
      <h4>할 일 목록</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            {...todo} 
            onUpdate={onUpdate} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;