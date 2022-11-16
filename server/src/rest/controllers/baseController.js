const get = (req, res) => {
  res.status(200).send(`Hello, this is the Calculator app's base controller`);
};

export default {
  get,
};
