import React, { useState, useEffect } from 'react';
import styles from './Greeting.module.css'; // 스타일을 객체로 임포트


function Greeting() {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    if (storedName) {
      setName(storedName);
    }
  }, [storedName]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    setStoredName(name);
  };

return (
    <div className={styles['greeting-container']}>
        {!storedName ? (
            <form onSubmit={handleFormSubmit} className={styles['greeting-form']}>
                <h1>Hello, What's your name?</h1>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleInputChange} 
                    className={styles["greeting-input"]}
                    placeholder="Enter your name" 
                />
                <button type="submit" className={styles['greeting-button']}>
                    Submit
                </button>
            </form>
        ) : (
            <h1 className={styles["greeting-message"]}>Good morning, {storedName}</h1>
        )}
    </div>
);
}

export default Greeting;