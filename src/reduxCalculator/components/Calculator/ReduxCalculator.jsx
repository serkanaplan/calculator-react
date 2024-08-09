import React from 'react';
import { useDispatch } from 'react-redux';
import { addDigit, setOperation, calculate, clear } from '../../redux/calculatorSlice';
import Display from '../Display/Display';
import Button from '../Button/Button';
import styles from './Calculator.module.css';

function ReduxCalculator() {
  const dispatch = useDispatch();

  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
    <Button key={num} onClick={() => dispatch(addDigit(num.toString()))} type="number">
      {num}
    </Button>
  ));

  const operationButtons = ['+', '-', '*', '/'].map(op => (
    <Button key={op} onClick={() => dispatch(setOperation(op))} type="operation">
      {op}
    </Button>
  ));

  return (
    <div className={styles.calculator}>
      <Display />
      <div className={styles.buttons}>
        <div className={styles.numbers}>
          {numberButtons}
          <Button onClick={() => dispatch(calculate())} type="equals">=</Button>
        </div>
        <div className={styles.operations}>
          {operationButtons}
          <Button onClick={() => dispatch(clear())} type="clear">C</Button>
        </div>
      </div>
    </div>
  );
}

export default ReduxCalculator;