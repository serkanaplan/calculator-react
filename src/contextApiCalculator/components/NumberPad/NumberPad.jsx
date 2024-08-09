import React from 'react';
import { useCalculator } from '../../context/CalculatorContext';
import Button from '../Button/Button';

const NumberPad = () => {
  const { dispatch } = useCalculator();
  return (
    <>
      {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
        <Button 
          key={num} 
          onClick={() => dispatch({ type: 'ADD_DIGIT', payload: num.toString() })}
          variant="number"
        >
          {num}
        </Button>
      ))}
    </>
  );
};

export default NumberPad;