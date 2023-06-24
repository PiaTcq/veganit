const registerController = require('./../controllers/registercontroller');

const express = require("express");
const router = express.Router();

router.get("/", registerController.register);

module.exports = router;