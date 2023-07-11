let user = require('../Database/User');

const registerUser = async (req, res) => {
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
  try {
    let result = await user.find({
      name: req.body.name,
    });
    if (result[0].password === req.body.password) {
      res.status(200).json({
        value: 'success',
        result,
      });
    } else {
      res.status(201).json({
        value: 'Passwords do not match',
      });
    }
  } catch (error) {
    res.status(201).json({
      error: error,
    });
  }
};
const deleteRegisterUser = async (req, res) => {
  try {
    let result = await user.deleteMany();
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
const findRegisterUser = async (req, res) => {
  try {
    let result = await user.find({});
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
module.exports = {
  registerUser,
  registerUserFind,
  deleteRegisterUser,
  findRegisterUser,
};
