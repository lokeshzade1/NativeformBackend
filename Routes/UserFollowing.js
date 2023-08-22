let { registerUserFollowing } = require('../Controller/UserFollowing');
let express = require('express');

let routes = express();

routes.post('/userFollowers/:id', registerUserFollowing);
// routes.post('/findRegisterUser', registerUserFind);
// routes.delete('/deleteAllRegisterUser', deleteRegisterUser);
//   routes.get('/getRegisterInstagramUser', getRegisterInstagramUser);
module.exports = routes;
