const useMemory = (
  calculation,
  setCalculation,
  inputResult,
  setInputResult,
  setMessage,
  setShowMessage
) => {
  const saveIntoMemory = async e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/save`;
    const body = {
      calculation: calculation,
      inputResult: inputResult,
    };
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };

    try {
      const req = await fetch(url, settings);
      const res = await req.json();
      setMessage(res.message);
      setShowMessage(true);
    } catch (error) {
      setMessage('Something went wrong during save, try again!');
      setShowMessage(true);
    }
  };

  const readMemory = async e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/read`;
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    try {
      const req = await fetch(url, settings);
      const res = await req.json();
      setCalculation(res.calculation);
      setInputResult(res.inputResult);
      setMessage('Successful memory-reading!');
      setShowMessage(true);
    } catch (error) {
      setMessage('Something went wrong during memory-reading, try again!');
      setShowMessage(true);
    }
  };

  return {
    saveIntoMemory,
    readMemory,
  };
};

export default useMemory;
