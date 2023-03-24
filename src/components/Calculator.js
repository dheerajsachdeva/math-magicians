import './styles.css';
import { useState } from 'react';
import Output from './output';
import calculate from '../logic/calculate';
import Quote from './Quote';

const Calculator = () => {
  const [output, setOutput] = useState(0);

  const handleclick = (e) => {
    setOutput((obj) => calculate(obj, e.target.innerText));
  };

  return (
    <>
      <div className="calculator-grid">
        <Output output={output.next || output.total || 0} />
        <button onClick={handleclick} type="button">AC</button>
        <button onClick={handleclick} type="button">+/-</button>
        <button onClick={handleclick} type="button">%</button>
        <button onClick={handleclick} className="btn-orange" type="button">÷</button>
        <button onClick={handleclick} type="button">7</button>
        <button onClick={handleclick} type="button">8</button>
        <button onClick={handleclick} type="button">9</button>
        <button onClick={handleclick} className="btn-orange" type="button">x</button>
        <button onClick={handleclick} type="button">4</button>
        <button onClick={handleclick} type="button">5</button>
        <button onClick={handleclick} type="button">6</button>
        <button onClick={handleclick} className="btn-orange" type="button">-</button>
        <button onClick={handleclick} type="button">1</button>
        <button onClick={handleclick} type="button">2</button>
        <button onClick={handleclick} type="button">3</button>
        <button onClick={handleclick} className="btn-orange" type="button">+</button>
        <button onClick={handleclick} type="button" className="span-two">0</button>
        <button onClick={handleclick} type="button">.</button>
        <button onClick={handleclick} className="btn-orange" type="button">=</button>
      </div>
      <Quote />
    </>
  );
};

export default Calculator;
