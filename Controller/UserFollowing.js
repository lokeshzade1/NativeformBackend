let user = require('../Database/InstaSignUp');

const registerUserFollowing = async (req, res) => {
  try {
    let result = await user.findByIdAndUpdate(
      req.params.id,
      {
        $push: { follow: { lokesh: req.body.id, token: 2, time: '12:00' } },
      },
      { new: true }
    );
    result.follow = result.follow.splice(0);

    let newONE = await user.findByIdAndUpdate(
      req.params.id,
      { $set: result },
      { new: true }
    );
    res.status(200).json({
      value: result.follow.length + 'follow you have currently',
      follower: result.following.length + 'follower you have',
      newONE,
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
