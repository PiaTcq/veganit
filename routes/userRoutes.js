const loginController = require('./../controllers/loginController');
const registerController = require('./../controllers/registercontroller');

const express = require("express");
const router = express.Router();

router.get("/login", loginController.login);

router.get("/register", registerController.register);

module.exports = router;