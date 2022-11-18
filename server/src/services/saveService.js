import fs from 'fs';

const saveCalculation = async calculation => {
  try {
    const fileSetup = {
      savedCalculation: calculation,
    };
    const data = JSON.stringify(fileSetup, null, 2);
    fs.writeFile('memory.json', data, 'utf-8', error => {
      if (error) throw error;
      return true;
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  saveCalculation,
};
