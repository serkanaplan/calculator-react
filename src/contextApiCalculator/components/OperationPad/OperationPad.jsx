import React from 'react';
import { useCalculator } from '../../context/CalculatorContext';
import Button from '../Button/Button';

const OperationPad = () => {
  const { dispatch } = useCalculator();
  return (
    <>
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
    </>
  );
};

export default OperationPad;