const path = require("path");

const controlador = {

    register: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/register.html'));
    }
}


module.exports = controlador;