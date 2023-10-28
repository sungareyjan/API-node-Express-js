const express = require('express');
const route = express.Router();

const userController = require('../controller/userController');

route.get('/api/generate_token',userController.generate_token)
route.get('/api/get_all_users',authorize,userController.get_all_users);
route.get('/api/findUser/:id',userController.findUser);
route.get('/api/findUser',userController.find_user);
route.post('/api/create_user',userController.create_user);

module.exports = route;