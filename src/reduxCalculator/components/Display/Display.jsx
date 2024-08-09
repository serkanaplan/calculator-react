import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Display.module.css';

function Display() {
  const display = useSelector(state => state.calculator.display);

  return (
    <div className={styles.display}>
      {display}
    </div>
  );
}

export default Display;