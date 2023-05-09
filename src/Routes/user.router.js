const Router = require('express');

const router = new Router();
const usersController = require('../Controllers/users.controller');

router.post('/create', usersController.createUser);
router.get('/users', usersController.getAllUsers);
router.delete('/deleteUser/:id', usersController.deleteUser);
router.post('/login', usersController.login);

module.exports = router;