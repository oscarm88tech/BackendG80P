const express = require('express');
const ConectarBD = require('../config/db');
const cosr = require('cors');

const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

// enlazar conexion con la base de datos 
ConectarBD();
app.use(cosr());

app.use(express.json());

app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/productos', require('../routes/producto'));



app.get('/', (req, res) =>{
    res.send("Bienvenido estamos desde el navegador");
})

app.listen(port,() => console.log('estamos conectados el servidor con el puerto ', port));
