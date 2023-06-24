const loginController = require('./../controllers/loginController');

const express = require("express");
const router = express.Router();

router.get("/", loginController.login);

//router.get("/register", loginController.register);

module.exports = router;