import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children, type }) {
  return (
    <button 
      className={`${styles.button} ${styles[type]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;