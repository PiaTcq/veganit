const path = require("path");

const controlador = {

    register: (req, res) => {
        res.render("users/register");
    }
}


module.exports = controlador;