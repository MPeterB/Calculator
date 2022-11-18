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

export default {
  readMemory,
};
