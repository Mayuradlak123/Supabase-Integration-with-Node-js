const routes = require('express').Router();
const bodyParser = require('body-parser');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../services/user.service');



// Routes
routes.post('/users', createUser);
routes.get('/users', getAllUsers);
routes.get('/users/:id', getUserById);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);
module.exports=routes;
