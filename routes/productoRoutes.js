const productoController = require('./../controllers/productoController');

const express = require("express");
const router = express.Router();

router.get("/", productoController.producto);

module.exports = router;