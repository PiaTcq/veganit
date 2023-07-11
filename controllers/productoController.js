const path = require("path");

const controlador = {

    producto: (req, res) => {
        res.render("products/detalle-producto");
    }
}


module.exports = controlador;