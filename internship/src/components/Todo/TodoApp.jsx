import React, { useState, useEffect } from "react";
import "./todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        done: false,
      },
    ]);

    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <h1>Sujal Rai</h1>
          <p>Organize your day</p>
        </div>

        <div className="content">
          <form className="todo-form" onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Add a new task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button>Add</button>
          </form>

          <ul className="todo-list">
            {todos.length === 0 ? (
              <p className="empty">
                No tasks yet. Add one above.
              </p>
            ) : (
              todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  <div>
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleTodo(todo.id)}
                    />

                    <span className={todo.done ? "done" : ""}>
                      {todo.text}
                    </span>
                  </div>

                  <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TodoApp;