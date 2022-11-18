import './CalculatorBody.css';
import {useState} from 'react';
import Title from '../Title/Title';
import Screen from '../Screen/Screen';
import Buttons from '../Buttons/Buttons';
// import useMemory from '../../hooks/useMemory';

function CalculatorBody() {
  // const {saveIntoMemory, readMemory} = useMemory();
  const [input, setInput] = useState('');
  const [calculation, setCalculation] = useState('');
  // const [message, setMessage] = useState('')

  return (
    <div className='calculatorBody'>
      <Title />
      <Screen
        input={input}
        calculation={calculation}
      />
      <Buttons
        input={input}
        setInput={setInput}
        setCalculation={setCalculation}
      />
    </div>
  );
}

export default CalculatorBody;
