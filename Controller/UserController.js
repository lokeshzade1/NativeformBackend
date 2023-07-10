let user = require('../Database/User');

const registerUser = async (req, res) => {
  console.log(user);
  try {
    let result = await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json({
      value: 'success',
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
const registerUserFind = async (req, res) => {
  console.log(user);
  try {
    let result = await user.find({
      name: req.body.name,
      password: req.body.password,
    });

    res.status(200).json({
      value: 'success',
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
module.exports = { registerUser };
