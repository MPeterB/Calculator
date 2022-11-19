import saveService from '../../services/saveService';

const post = async (req, res) => {
  try {
    const result = await saveService.saveCalculation({ ...req.body });
    if (!req.body.inputResult)
      res.status(400).json({
        message:
          'Calculation is not necessary, but you have to provide inputResult to be able to save!',
      });
    if (result)
      res.status(200).json({ message: 'Successful save into memory!' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again later' });
  }
};

export default {
  post,
};
