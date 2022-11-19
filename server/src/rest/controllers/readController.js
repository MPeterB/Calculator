import readService from '../../services/readService';

const get = async (req, res) => {
  try {
    const calculation = await readService.readMemory();
    if (calculation) return res.status(200).json(calculation);
    throw error;
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again later!' });
  }
};

export default {
  get,
};
