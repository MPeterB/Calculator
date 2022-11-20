const validateLength = requestBody => {
  const calculationOperation = eval(requestBody.calculation);
  const inputOperation = eval(requestBody.inputResult);
  if (-999999999 > calculationOperation || calculationOperation > 9999999999) {
    return false;
  }
  if (-999999999 > inputOperation || inputOperation > 9999999999) {
    return false;
  }
  return true;
};

const validateCharacters = requestBody => {
  if (requestBody.calculation) {
    if (!validateCalculation(requestBody)) return false;
  }
  if (!validateInputResult(requestBody)) return false;
  return true;
};

const validateCalculation = requestBody => {
  const operators = ['+', '-', '*', '/'];
  let pointFound = false;
  // containes only numbers, '.', '+', '-', '*', '/'
  if (!/^[0-9+\-*/.]+$/.test(requestBody.calculation)) return false;
  // number at the end
  if (!/^[0-9]$/.test(requestBody.calculation.slice(-1))) return false;
  // no operator and . at the beginning, except + and -
  if (/^[/*.]$/.test(requestBody.calculation[0])) return false;
  // no multiple operators or '.' after one an other
  for (let i = 1; i <= requestBody.calculation.length; i++) {
    if (/^[+\-*/.]$/.test(requestBody.calculation[i])) {
      if (!/^[0-9]$/.test(requestBody.calculation[i - 1])) return false;
    }
  }
  for (let i = 0; i <= requestBody.calculation.length; i++) {
    // no number starts with 0 => no multiple 0 at the beginning of a number
    if (i === 0 && requestBody.calculation[i] === '0') {
      if (/^[0-9]$/.test(requestBody.calculation[i + 1])) return false;
    }
    if (
      operators.includes(requestBody.calculation[i]) &&
      requestBody.calculation[i + 1] === '0'
    ) {
      if (/^[0-9]$/.test(requestBody.calculation[i + 2])) return false;
    }
    // number before and after '.'
    if (requestBody.calculation[i] === '.') {
      if (!/^[0-9]$/.test(requestBody.calculation[i - 1])) return false;
      if (!/^[0-9]$/.test(requestBody.calculation[i + 1])) return false;
    }
    // '/0' happens and no operator after 0 => can't divide with 0
    if (
      requestBody.calculation[i] === '/' &&
      requestBody.calculation[i + 1] === '0'
    ) {
      if (!/^[.]$/.test(requestBody.calculation[i + 2])) return false;
    }
    // no multiple '.' in one number
    if (/^[+\-*/]$/.test(requestBody.calculation[i])) {
      pointFound = false;
    }
    if (/^[.]$/.test(requestBody.calculation[i])) {
      if (pointFound) return false;
      pointFound = true;
    }
  }
  return true;
};

const validateInputResult = requestBody => {
  const operators = ['+', '-', '*', '/'];
  let pointFound = false;
  // containes only numbers, '.', '+', '-', '*', '/'
  if (!/^[0-9+\-*/.]+$/.test(requestBody.inputResult)) return false;
  // number at the end
  if (!/^[0-9]$/.test(requestBody.inputResult.slice(-1))) return false;
  // no operator and . at the beginning, except + and -
  if (/^[/*.]$/.test(requestBody.inputResult[0])) return false;
  // no multiple operators or '.' after one an other
  for (let i = 1; i <= requestBody.inputResult.length; i++) {
    if (/^[+\-*/.]$/.test(requestBody.inputResult[i])) {
      if (!/^[0-9]$/.test(requestBody.inputResult[i - 1])) return false;
    }
  }
  for (let i = 0; i <= requestBody.inputResult.length; i++) {
    // no number starts with 0 => no multiple 0 at the beginning of a number
    if (i === 0 && requestBody.inputResult[i] === '0') {
      if (/^[0-9]$/.test(requestBody.inputResult[i + 1])) return false;
    }
    if (
      operators.includes(requestBody.inputResult[i]) &&
      requestBody.inputResult[i + 1] === '0'
    ) {
      if (/^[0-9]$/.test(requestBody.inputResult[i + 2])) return false;
    }
    // number before and after '.'
    if (requestBody.inputResult[i] === '.') {
      if (!/^[0-9]$/.test(requestBody.inputResult[i - 1])) return false;
      if (!/^[0-9]$/.test(requestBody.inputResult[i + 1])) return false;
    }
    // '/0' happens and no operator after 0 => can't divide with 0
    if (
      requestBody.inputResult[i] === '/' &&
      requestBody.inputResult[i + 1] === '0'
    ) {
      if (!/^[.]$/.test(requestBody.inputResult[i + 2])) return false;
    }
    // no multiple '.' in one number
    if (/^[+\-*/]$/.test(requestBody.inputResult[i])) {
      pointFound = false;
    }
    if (/^[.]$/.test(requestBody.inputResult[i])) {
      if (pointFound) return false;
      pointFound = true;
    }
  }
  return true;
};

export default {
  validateLength,
  validateCharacters,
};
