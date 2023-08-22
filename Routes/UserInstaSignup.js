let {
  registerInstagramUser,
  getRegisterInstagramUser,
} = require('../Controller/UserInstaSignUp');
let express = require('express');

let routes = express();

routes.post('/registerInstagramUser', registerInstagramUser);
// routes.post('/findRegisterUser', registerUserFind);
// routes.delete('/deleteAllRegisterUser', deleteRegisterUser);
routes.get('/getRegisterInstagramUser', getRegisterInstagramUser);
module.exports = routes;
