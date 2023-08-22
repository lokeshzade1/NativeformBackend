let user = require('../Database/InstaSignUp');

const registerInstagramUser = async (req, res) => {
  try {
    let Rgisteser = await user.find({
      $or: [
        { phoneNumberOrEmail: req.body.phoneNumberOrEmail },
        { UserName: req.body.phoneNumberOrEmail },
      ],
    });
    if (Rgisteser.length !== 0) {
      res.status(200).json({
        value: 'alredy registered',
        result,
      });
    } else {
      var result = await user.create({
        phoneNumberOrEmail: req.body.phoneNumberOrEmail,
        FullName: req.body.FullName,
        UserName: req.body.UserName,
        passWord: req.body.passWord,
        discriptionOfUser: req.body.discriptionOfUser,
      });
    }

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

const getRegisterInstagramUser = async (req, res) => {
  try {
    let result = await user.find();

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
module.exports = { registerInstagramUser, getRegisterInstagramUser };
