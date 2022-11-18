import saveService from '../../services/saveService';

const post = async (req, res) => {
  try {
    const calculation = req.body.calculationToSave;
    const result = await saveService.saveCalculation(calculation);
    if (result)
      res.status(200).json({ message: 'successful save into memory' });
    throw error;
  } catch (error) {
    res.status(400).json({ message: 'something went wrong, try again later' });
  }
};

export default {
  post,
};
