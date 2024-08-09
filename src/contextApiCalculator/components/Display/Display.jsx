import React from 'react';
import { useCalculator } from '../../context/CalculatorContext'; 
import styles from './Display.module.css';

const Display = () => {
  const { state } = useCalculator();
  return <div className={styles.display}>{state.display}</div>;
};

export default Display;