import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, variant }) => (
    <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}>
        {children}
    </button>
);

export default Button;