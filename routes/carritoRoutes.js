const carritoController = require('./../controllers/carritoController');

const express = require("express");
const router = express.Router();

router.get("/", carritoController.carrito);


module.exports = router;