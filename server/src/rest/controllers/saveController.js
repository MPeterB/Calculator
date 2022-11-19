import saveService from '../../services/saveService';

const post = async (req, res) => {
  try {
    const result = await saveService.saveCalculation({ ...req.body });
    if (result)
      res.status(200).json({ message: 'Successful save into memory!' });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong, try again later' });
  }
};

export default {
  post,
};
