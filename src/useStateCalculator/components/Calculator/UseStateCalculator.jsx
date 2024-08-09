import React from 'react';
import useCalculator from '../../hooks/useCalculator';
import Display from '../Display/Display';
import Button from '../Button/Button';
import styles from './Calculator.module.css';

const UseStateCalculator = () => {
    const {
        display,
        handleNumberClick,
        handleOperationClick,
        handleEqualsClick,
        handleClear
    } = useCalculator();

    return (
        <div className={styles.calculator}>
            <Display value={display} />
            <div className={styles.buttonGrid}>
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
                    <Button key={num} onClick={() => handleNumberClick(num.toString())} variant="number">
                        {num}
                    </Button>
                ))}
                {['+', '-', '*', '/'].map(op => (
                    <Button key={op} onClick={() => handleOperationClick(op)} variant="operation">
                        {op}
                    </Button>
                ))}
                <Button onClick={handleEqualsClick} variant="equals">=</Button>
                <Button onClick={handleClear} variant="clear">C</Button>
            </div>
        </div>
    );
};

export default UseStateCalculator;