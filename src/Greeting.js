import React, { useState } from "react";
import styles from "./Greeting.module.css"; // 스타일을 객체로 임포트
import TodoList from "./TodoList"; // TodoList 컴포넌트를 임포트

/**
 * Represents a component that displays a greeting message based on user input.
 *
 * @returns {JSX.Element} The rendered Greeting component.
 */
function Greeting() {
  // useState 훅을 사용하여 name 상태를 정의하고 초기값을 빈 문자열로 설정
  const [name, setName] = useState("");
  // useState 훅을 사용하여 storedName 상태를 정의하고 초기값을 localStorage에 저장된 값 또는 빈 문자열로 설정
  const [storedName, setStoredName] = useState(
    localStorage.getItem("name") || ""
  );

  // input 요소의 값이 변경될 때마다 name 상태를 업데이트
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // form 요소를 제출할 때 name 상태를 localStorage에 저장하고 storedName 상태를 업데이트
  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setStoredName(name);
  };

  // storedName 상태가 설정되지 않은 경우 폼을 렌더링하고, 설정된 경우 인사말과 TodoList를 렌더링
  return (
    <div className={styles["greeting-container"]}>
      {!storedName ? (
        <form onSubmit={handleFormSubmit} className={styles["greeting-form"]}>
          <h1>Hello, What's your name?</h1>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            className={styles["greeting-input"]}
            placeholder="Enter your name"
          />
          <button type="submit" className={styles["greeting-button"]}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1 className={styles["greeting-message"]}>
            Good morning, {storedName}
          </h1>
          <TodoList username={storedName} />
        </div>
      )}
    </div>
  );
}

export default Greeting;
