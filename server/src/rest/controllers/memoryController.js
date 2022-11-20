import memoryService from '../../services/memoryService';
import validationService from '../../services/validationService';

const get = async (req, res) => {
  try {
    const calculation = await memoryService.readMemory();
    if (calculation) return res.status(200).json(calculation);
    throw error;
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Something went wrong, try again later!' });
  }
};

const post = async (req, res) => {
  try {
    if (!req.body.inputResult)
      return res.status(400).json({
        message: `You can't save, type something!`,
      });
    const validCharacters = validationService.validateCharacters({
      ...req.body,
    });
    if (!validCharacters)
      return res.status(400).json({ message: 'The characters are not valid!' });
    const validLength = validationService.validateLength({ ...req.body });
    if (!validLength)
      return res.status(400).json({ message: 'The length is not valid!' });
    const result = await memoryService.saveCalculation({ ...req.body });
    if (result)
      res.status(200).json({ message: 'Successful save into memory!' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Something went wrong, try again later' });
  }
};

export default {
  get,
  post,
};
