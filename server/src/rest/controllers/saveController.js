import saveService from '../../services/saveService';

const post = async (req, res) => {
  try {
    if (!req.body.inputResult)
      return res.status(400).json({
        message: `You can't save, type something!`,
      });
    const result = await saveService.saveCalculation({ ...req.body });
    if (result)
      res.status(200).json({ message: 'Successful save into memory!' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again later' });
  }
};

export default {
  post,
};
