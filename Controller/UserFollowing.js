let user = require('../Database/InstaSignUp');

const registerUserFollowing = async (req, res) => {
  try {
    let result = await user.findByIdAndUpdate(
      req.params.id,
      {
        $push: { follow: req.body.id },
      },
      { new: true }
    );

    res.status(200).json({
      value: 'Following',
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  registerUserFollowing,
};
