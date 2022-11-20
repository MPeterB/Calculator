import './Calculator.css';
import { useState } from 'react';
import Screen from '../../components/Screen/Screen';
import Buttons from '../../components/Buttons/Buttons';
import Message from '../../components/Message/Message';

function Calculator() {
  const [inputResult, setInputResult] = useState('');
  const [calculation, setCalculation] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="calculator">
      <Screen inputResult={inputResult} calculation={calculation} />
      <Message message={message} showMessage={showMessage} />
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

export default Calculator;
