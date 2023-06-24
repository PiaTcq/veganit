const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");
const homeRoutes = require("./routes/homeRoutes");
const productoRoutes = require("./routes/productoRoutes");
const carritoRoutes = require("./routes/carritoRoutes");

const express = require('express');
const path = require('path');
const app = express();

//app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,'/public')));

app.use("/", homeRoutes);

app.use("/login", loginRoutes);

app.use("/register", registerRoutes);

app.use("/producto", productoRoutes);

app.use("/carrito", carritoRoutes);

app.listen(3000, function(){
    console.log("Servidor Corriendo")
});


