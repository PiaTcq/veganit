const path = require("path");

const controlador = {

    producto: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/detalle-producto.html'));
    }
}


module.exports = controlador;