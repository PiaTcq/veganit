const path = require("path");

const controlador = {

    login: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/login.html'));
    }
}

module.exports = controlador;