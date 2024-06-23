import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ username }) {
  const [todos, setTodos] = useState([]);
  const [newTodoName, setNewTodoName] = useState("");
  const [doneList, setDoneList] = useState([]);

  // 로컬 스토리지에서 todos 불러오기
  useEffect(() => {
    const storedTodos =
      JSON.parse(localStorage.getItem(`todos_${username}`)) || [];
    setTodos(storedTodos);
  }, [username]);

  // 로컬 스토리지에서 doneList 불러오기
  useEffect(() => {
    const storedDoneList =
      JSON.parse(localStorage.getItem(`donelist_${username}`)) || [];
    setDoneList(storedDoneList);
  }, []);

  // todos가 변경될 때 로컬 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem(`todos_${username}`, JSON.stringify(todos));
  }, [todos, username]);

  // doneList가 변경될 때 로컬 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem(`donelist_${username}`, JSON.stringify(doneList));
  }, [doneList, username]);

  const handleInputChange = (e) => {
    setNewTodoName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodoName.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoName("");
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };
  const addToDoneList = (todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
    setDoneList([...doneList, todo]);
  };

  return (
    <div className={styles["todo-list-container"]}>
      <form onSubmit={handleFormSubmit} className={styles["todo-form"]}>
        <input
          type="text"
          value={newTodoName}
          onChange={handleInputChange}
          className={styles["todo-input"]}
          placeholder="Enter new todo"
        />
        <button type="submit" className={styles["todo-button"]}>
          Add Todo
        </button>
      </form>
      <div className={styles["todo-items"]}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            addToDoneList={addToDoneList}
          />
        ))}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  username: PropTypes.string.isRequired,
};

export default TodoList;
