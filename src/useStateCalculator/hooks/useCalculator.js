import { useState } from 'react';

const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay(prevDisplay => prevDisplay === '0' ? number : prevDisplay + number);
  };

  const handleOperationClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    let result;
    switch (operation) {
      case '+': result = previousValue + current; break;
      case '-': result = previousValue - current; break;
      case '*': result = previousValue * current; break;
      case '/': result = previousValue / current; break;
      default: return;
    }
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  return {
    display,
    handleNumberClick,
    handleOperationClick,
    handleEqualsClick,
    handleClear
  };
};

export default useCalculator;