const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'/public')));

/* aca van las rutas */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/producto', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/detalle-producto.html'));
});
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname + '/views/login.html'));
});
app.get('/carrito', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/carrito.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'));
});

app.get('*', (req, res) => {
    res.send("Ruta restringida no corresponde a ninguna direccion");
});

/*server run*/

app.listen(3000, function(){
    console.log("Servidro Corriendo")
});