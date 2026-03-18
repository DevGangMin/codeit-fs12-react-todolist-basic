function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return "기한 없음";
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      hour12: true
    });
  };

  return (
    <li className="todo-item">
      <div className="content-area" style={{ textDecoration: isDone ? "line-through" : "none" }}>
        <span>{content}</span>
        <small>({formatDate(date)})</small>
      </div>
      
      <div className="button-area">
        {/* 완료 버튼 */}
        <button onClick={() => onUpdate(id)}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;