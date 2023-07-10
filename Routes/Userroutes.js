let { registerUser } = require('../Controller/UserController');
let express = require('express');
let routes = express();

routes.post('/userRegister', registerUser);

module.exports = routes;
