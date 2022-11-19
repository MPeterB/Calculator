const useButtons = (
  inputResult,
  setInputResult,
  setCalculation,
  setMessage,
  setShowMessage
) => {
  const numbers = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    const operators = ['+', '-', '*', '/'];
    if (inputResult.slice(-1) === '0') {
      if (
        operators.includes(inputResult.slice(-2, -1)) ||
        inputResult.length === 1
      ) {
        const newString = inputResult.split('').slice(0, -1).join('');
        setInputResult(newString + e.target.value);
        return;
      }
      setInputResult(inputResult + e.target.value);
    }
    setInputResult(inputResult + e.target.value);
  };

  const zero = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    const operators = ['+', '-', '*', '/'];
    if (inputResult.slice(-1) === '0') {
      if (operators.includes(inputResult.slice(-2, -1))) return;
      if (inputResult.length === 1) return;
      setInputResult(inputResult + e.target.value);
    }
    setInputResult(inputResult + e.target.value);
  };

  const point = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    const operators = ['+', '-', '*', '/'];
    if (inputResult.length === 0) {
      setInputResult('0' + e.target.value);
      return;
    }
    if (inputResult.slice(-1) === '.') return;
    if (operators.includes(inputResult.slice(-1))) {
      setInputResult(inputResult + '0' + e.target.value);
      return;
    }
    const lastOperatorIndex = indexOfOperator();
    const lastPointIndex = indexOfPoint();
    if (lastPointIndex > lastOperatorIndex) return;
    setInputResult(inputResult + e.target.value);
  };

  const operations = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    const operators = ['+', '-', '*', '/'];
    const multDiv = ['*', '/'];
    if (inputResult.length === 0 && multDiv.includes(e.target.value)) {
      setInputResult('0' + e.target.value);
      return;
    }
    if (
      (inputResult === '+' || inputResult === '-') &&
      multDiv.includes(e.target.value)
    ) {
      setInputResult('0' + e.target.value);
      return;
    }
    if (operators.includes(inputResult.slice(-1))) {
      const newString = inputResult.split('').slice(0, -1).join('');
      setInputResult(newString + e.target.value);
      return;
    }
    setInputResult(inputResult + e.target.value);
  };

  const clear = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    setCalculation('');
    setInputResult('');
  };

  const remove = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    if (inputResult.length === 0) return;
    const newString = inputResult.split('').slice(0, -1).join('');
    setInputResult(newString);
  };

  const equal = e => {
    e.preventDefault();
    setMessage('');
    setShowMessage(false);
    let newString;
    const operators = ['+', '-', '*', '/'];
    if (inputResult.length === 0) {
      setMessage('You did not write any number!');
      setShowMessage(true);
      return;
    }
    if (operators.includes(inputResult.slice(-1))) {
      setMessage(`Operator can't be the last character!`);
      setShowMessage(true);
      return;
    }
    const mathOperation = eval(inputResult);
    if (mathOperation === Infinity || mathOperation === -Infinity) {
      setInputResult(inputResult.toString());
      setMessage('You can not devide with 0!');
      setShowMessage(true);
      return;
    }
    if (-999999999 > mathOperation || mathOperation > 9999999999) {
      setInputResult(inputResult.toString());
      setMessage('This would be too big to show!');
      setShowMessage(true);
      return;
    }
    if (inputResult.slice(-1) === '.') {
      newString = inputResult.split('').slice(0, -1).join('');
      setCalculation(newString);
    }
    if (newString) {
      setCalculation(newString);
    } else {
      setCalculation(inputResult);
    }
    setInputResult(roundIfNecessary(mathOperation).toString());
  };

  const indexOfOperator = () => {
    const newArray = inputResult.split('');
    const indexPlus = newArray.findLastIndex(element => element === '+');
    const indexMinus = newArray.findLastIndex(element => element === '-');
    const indexMultiply = newArray.findLastIndex(element => element === '*');
    const indexDivide = newArray.findLastIndex(element => element === '/');

    const lastOperatorIndex = Math.max(
      indexPlus,
      indexMinus,
      indexMultiply,
      indexDivide
    );

    return lastOperatorIndex;
  };

  const indexOfPoint = () => {
    const newArray = inputResult.split('');
    const lastPointIndex = newArray.findLastIndex(element => element === '.');

    return lastPointIndex;
  };

  const roundIfNecessary = number => {
    const roundedNumber = Math.round(number * 100) / 100;
    return roundedNumber;
  };

  return {
    numbers,
    zero,
    point,
    operations,
    clear,
    remove,
    equal,
  };
};

export default useButtons;
