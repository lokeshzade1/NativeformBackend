let { InstaLogin } = require('../Controller/InstaLogin');
let express = require('express');

let routes = express();

routes.post('/registerInstagramlogin', InstaLogin);
// routes.post('/findRegisterUser', registerUserFind);
// routes.delete('/deleteAllRegisterUser', deleteRegisterUser);
//   routes.get('/getRegisterInstagramUser', getRegisterInstagramUser);
module.exports = routes;
