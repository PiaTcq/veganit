const productoController = require('./../controllers/productoController');
const carritoController = require('./../controllers/carritoController');

const express = require("express");
const router = express.Router();

router.get("/producto", productoController.producto);

router.get("/carrito", carritoController.carrito);

module.exports = router;