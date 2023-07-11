let {
  registerUser,
  registerUserFind,
  deleteRegisterUser,
  findRegisterUser,
} = require('../Controller/UserController');
let express = require('express');

let routes = express();

routes.post('/userRegister', registerUser);
routes.post('/findRegisterUser', registerUserFind);
routes.delete('/deleteAllRegisterUser', deleteRegisterUser);
routes.get('/getRegisterUser', findRegisterUser);
module.exports = routes;
