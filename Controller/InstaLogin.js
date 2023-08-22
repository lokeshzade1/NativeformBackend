let user = require('../Database/InstaSignUp');

// phoneNumberOrEmail: { type: String, required: true },
// FullName: { type: String, required: true },
// UserName: { type: String, required: true },
// passWord: { type: String, required: true },
const InstaLogin = async (req, res) => {
  try {
    let result = await user.find({
      $or: [
        { phoneNumberOrEmail: req.body.phoneNumberOrEmail },
        { FullName: req.body.phoneNumberOrEmail },
        { UserName: req.body.phoneNumberOrEmail },
      ],
      passWord: req.body.passWord,
    });
    if (result.length === 0) {
      res.status(400).json({
        val: 'Invalid',
      });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = { InstaLogin };
