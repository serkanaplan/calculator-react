import React from 'react';
import { CalculatorProvider } from '../../context/CalculatorContext';
import Display from '../Display/Display';
import NumberPad from '../NumberPad/NumberPad';
import OperationPad from '../OperationPad/OperationPad';
import styles from './Calculator.module.css';

const ContextApiCalculator = () => {
  return (
    <CalculatorProvider>
      <div className={styles.calculator}>
        <Display />
        <div className={styles.buttonGrid}>
          <NumberPad />
          <OperationPad />
        </div>
      </div>
    </CalculatorProvider>
  );
};

export default ContextApiCalculator;