import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Display from './Display';
import History from './History';
import { useStore } from '../store/store';

const CalculatorWrapper = styled.div`
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Calculator = () => {
  const { expression, result, history, setExpression, setResult, addToHistory } = useStore();

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const resultValue = new Function('return ' + expression)();
      setResult(resultValue.toString());
      addToHistory(resultValue.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  return (
    <CalculatorWrapper>
      <Display expression={expression} result={result} />
      <Button onClick={() => handleButtonClick('1')}>1</Button>
      <Button onClick={() => handleButtonClick('2')}>2</Button>
      <Button onClick={() => handleButtonClick('3')}>3</Button>
      <Button onClick={() => handleButtonClick('+')}>+</Button>
      <Button onClick={() => handleButtonClick('4')}>4</Button>
      <Button onClick={() => handleButtonClick('5')}>5</Button>
      <Button onClick={() => handleButtonClick('6')}>6</Button>
      <Button onClick={() => handleButtonClick('-')}>-</Button>
      <Button onClick={() => handleButtonClick('7')}>7</Button>
      <Button onClick={() => handleButtonClick('8')}>8</Button>
      <Button onClick={() => handleButtonClick('9')}>9</Button>
      <Button onClick={() => handleButtonClick('*')}>*</Button>
      <Button onClick={() => handleButtonClick('0')}>0</Button>
      <Button onClick={() => handleButtonClick('.')}>.</Button>
      <Button onClick={() => handleCalculate()}>=</Button>
      <Button onClick={() => handleClear()}>C</Button>
      <Button onClick={() => handleBackspace()}>←</Button>
      <Button onClick={() => handleButtonClick('/')}>/</Button>
      <History history={history} />
    </CalculatorWrapper>
  );
};

export default Calculator;