import fs from 'fs';

const readMemory = async () => {
  try {
    const savedCalculation = JSON.parse(
      fs.readFileSync('memory.json', 'utf-8')
    );
    return savedCalculation;
  } catch (error) {
    return false;
  }
};

const saveCalculation = async requestBody => {
  try {
    const dataToSave = setupDataToSave(requestBody);
    const data = JSON.stringify(dataToSave, null, 2);
    fs.writeFileSync('memory.json', data, 'utf-8');
    return true;
  } catch (error) {
    return false;
  }
};

const setupDataToSave = requestBody => {
  const dataToSave = {};
  if (requestBody.calculation) dataToSave.calculation = requestBody.calculation;
  if (requestBody.inputResult) dataToSave.inputResult = requestBody.inputResult;
  return dataToSave;
};

export default {
  readMemory,
  saveCalculation,
};
