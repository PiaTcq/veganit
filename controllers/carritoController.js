const path = require("path");

const controlador = {

    carrito: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/carrito.html'));
    }
}

module.exports = controlador;