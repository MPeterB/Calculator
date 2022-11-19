import fs from 'fs';

const saveCalculation = async requestBody => {
  try {
    const fileSetup = {
      calculation: requestBody.calculation,
      result: requestBody.result,
    };
    const data = JSON.stringify(fileSetup, null, 2);
    fs.writeFileSync('memory.json', data, 'utf-8');
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  saveCalculation,
};
