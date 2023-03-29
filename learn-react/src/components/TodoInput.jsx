import React, { useEffect, useRef, dispatch, setText, text } from "react";

// src/components/TodoInput.jsx
function TodoInput({ createTodo, onChange }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능 실행 x.
    dispatch({ type: "CREATE_TODO", text: text });
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("TodoInput Render");
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoInput);
