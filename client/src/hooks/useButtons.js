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
    if (inputResult.length === 0) return;
    const mathOperation = eval(inputResult);
    if (mathOperation === Infinity || mathOperation === -Infinity) {
      setInputResult('');
      return;
    }
    setCalculation(inputResult);
    setInputResult(mathOperation.toString());
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
