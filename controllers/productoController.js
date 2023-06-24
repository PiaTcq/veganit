const path = require("path");

const controlador = {

    producto: (req, res) => {
        res.render("detalle-producto");
    }
}


module.exports = controlador;