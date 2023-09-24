let { loginUser } = require('../Controller/Userlogincontrolller');
let express = require('express');

let routes = express();

routes.post('/registerInstagramlogin', loginUser);
// routes.post('/findRegisterUser', registerUserFind);
// routes.delete('/deleteAllRegisterUser', deleteRegisterUser);
//   routes.get('/getRegisterInstagramUser', getRegisterInstagramUser);
module.exports = routes;
