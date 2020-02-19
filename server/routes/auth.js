const express = require("express");
const router = express.Router();
const authorize = require('./../middlewares/jwt');
const authController = require('./../controllers/authController');


router.route('/user')
    .post(authController.createUser)
    .get(authController.getAllUsers)
    .put(authController.createUser)

router.route('/user/:id')
    .get(authorize, authController.getUser)
    .post(authorize, authController.updateUser)
    .delete(authorize, authController.deleteUser)

router.route('/login')
    .post(authController.loginUser)

module.exports = router;