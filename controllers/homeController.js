const path = require("path");

const controlador = {

    index: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/index.html'));
    }
}

module.exports = controlador;