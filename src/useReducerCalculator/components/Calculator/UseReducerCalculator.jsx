import React from 'react';
import useCalculatorReducer from '../../hooks/useCalculatorReducer';
import Display from '../Display/Display';
import Button from '../Button/Button';
import styles from './Calculator.module.css';

const UseReducerCalculator = () => {
  const { state, dispatch } = useCalculatorReducer();

  return (
    <div className={styles.calculator}>
      <Display value={state.display} />
      <div className={styles.buttonGrid}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
          <Button 
            key={num} 
            onClick={() => dispatch({ type: 'ADD_DIGIT', payload: num.toString() })} 
            variant="number"
          >
            {num}
          </Button>
        ))}
        {['+', '-', '*', '/'].map(op => (
          <Button 
            key={op} 
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: op })} 
            variant="operation"
          >
            {op}
          </Button>
        ))}
        <Button onClick={() => dispatch({ type: 'CALCULATE' })} variant="equals">=</Button>
        <Button onClick={() => dispatch({ type: 'CLEAR' })} variant="clear">C</Button>
      </div>
    </div>
  );
};

export default UseReducerCalculator;