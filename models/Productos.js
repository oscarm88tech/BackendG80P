const mongoose = require ('mongoose');

// el modelo que se va a implementar debe ser el mismo a la base de datos 

const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    
    peso:{
        type: Number,
        require: true
    },
    codigobarras:{
        type: Number,
        require: true
    },
    ciudadorigen:{
        type: String,
        require: true
    }
},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema );