const useButtons = (input, setInput, setCalculation) => {
  const numbers = e => {
    e.preventDefault();
    const operators = ['+', '-', '*', '/'];
    if (input.slice(-1) === '0') {
      if (operators.includes(input.slice(-2, -1)) || input.length === 1) {
        const newString = input.split('').slice(0, -1).join('');
        setInput(newString + e.target.value);
        return;
      }
      setInput(input + e.target.value);
    }
    setInput(input + e.target.value);
  };

  const zero = e => {
    e.preventDefault();
    const operators = ['+', '-', '*', '/'];
    if (input.slice(-1) === '0') {
      if (operators.includes(input.slice(-2, -1))) return;
      if (input.length === 1) return;
      setInput(input + e.target.value);
    }
    setInput(input + e.target.value);
  };

  const point = e => {
    e.preventDefault();
    const operators = ['+', '-', '*', '/'];
    if (input.length === 0) {
      setInput('0' + e.target.value);
      return;
    }
    if (input.slice(-1) === '.') return;
    if (operators.includes(input.slice(-1))) {
      setInput(input + '0' + e.target.value);
      return;
    }
    const lastOperatorIndex = indexOfOperator();
    const lastPointIndex = indexOfPoint();
    if (lastPointIndex > lastOperatorIndex) return;
    setInput(input + e.target.value);
  };

  const operations = e => {
    e.preventDefault();
    const operators = ['+', '-', '*', '/'];
    const multDiv = ['*', '/'];
    if (input.length === 0 && multDiv.includes(e.target.value)) {
      setInput('0' + e.target.value);
      return;
    }
    if ((input === '+' || input === '-') && multDiv.includes(e.target.value)) {
      setInput('0' + e.target.value);
      return;
    }
    if (operators.includes(input.slice(-1))) {
      const newString = input.split('').slice(0, -1).join('');
      setInput(newString + e.target.value);
      return;
    }
    setInput(input + e.target.value);
  };

  const clear = e => {
    e.preventDefault();
    setCalculation('');
    setInput('');
  };

  const remove = e => {
    e.preventDefault();
    if (input.length === 0) return;
    const newString = input.split('').slice(0, -1).join('');
    setInput(newString);
  };

  const equal = () => {
    if (input.length === 0) return;
    const mathOperation = eval(input);
    if (mathOperation === Infinity || mathOperation === -Infinity) {
      setInput('');
      return;
    }
    setCalculation(input);
    setInput(mathOperation.toString());
  };

  const indexOfOperator = () => {
    const newArray = input.split('');
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
    const newArray = input.split('');
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
