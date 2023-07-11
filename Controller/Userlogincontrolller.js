let login = require('../Database/login');
let user = require('../Database/user');
const loginUser = async (req, res) => {
  try {
    let result = await login.create({
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
// const registerloginFind = async (req, res) => {
//   try {
//     let result = await login.find({
//       name: req.body.name,
//       password: req.body.password,
//     });

//     res.status(200).json({
//       value: 'success',
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error,
//     });
//   }
// };
module.exports = { loginUser };
