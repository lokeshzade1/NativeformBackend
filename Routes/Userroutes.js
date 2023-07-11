let {
  registerUser,
  registerUserFind,
  deleteRegisterUser,
} = require('../Controller/UserController');
let express = require('express');

let routes = express();

routes.post('/userRegister', registerUser);
routes.post('/findRegisterUser', registerUserFind);
routes.delete('/deleteAllRegisterUser', deleteRegisterUser);

module.exports = routes;
