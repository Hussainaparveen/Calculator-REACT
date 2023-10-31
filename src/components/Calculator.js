import React from 'react';
import useCalculator from '../useCalculator';

function Calculator(){
    const { result,handleButtonClick }=useCalculator();
  return (
    <div className="calculator">
       <div className="display">{result}
      </div>
      <div className="buttons">
        <div className="row">
          <button className='operators' onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button style={{borderBottomLeftRadius:10}} onClick={() => handleButtonClick('0')}>0</button>
        </div>
        <div className="row">
          <button className='operators' onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('.')}>.</button>          
        </div>
        <div className="row">
          <button className='operators' onClick={() => handleButtonClick('*')}>x</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('CE')}>CE</button>
        </div>
        <div className="row">
          <button className='operators' onClick={() => handleButtonClick('/')}>/</button>
          <button id="equalto" onClick={() => handleButtonClick('=')}>=</button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;
