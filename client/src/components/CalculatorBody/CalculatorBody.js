import './CalculatorBody.css';
import {useState} from 'react';
import Screen from '../Screen/Screen';
import Buttons from '../Buttons/Buttons';
import Message from '../Message/Message';

function CalculatorBody() {
  const [inputResult, setInputResult] = useState('');
  const [calculation, setCalculation] = useState('');
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className='calculatorBody'>
      <Screen
        inputResult={inputResult}
        calculation={calculation}
      />
      <Message
        message={message}
        showMessage={showMessage}
        />
      <Buttons
        inputResult={inputResult}
        calculation={calculation}
        setInputResult={setInputResult}
        setCalculation={setCalculation}
        setMessage={setMessage}
        setShowMessage={setShowMessage}
      />
    </div>
  );
}

export default CalculatorBody;
