const Productos = require('../models/Productos');

// funcion agregar clientes 
exports.agregarProductos = async(req, res) => {
    try {

        let productos;
        productos = new Productos(req.body);
        await productos.save();
        res.send(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar el producto ');
        
    }

}

// funcion que nos va a mostrar todos los clientes 
exports.mostrarProductos = async(req, res) =>{
    try{
        const productos = await Productos.find();
        res.json(productos);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos ');


    }
}



// funcion para mostrar un cliente 
exports.buscarProductos = async (req, res) => {
    try {
        let productos = await Productos.findById(req.params.id);

        if (!productos){
            res.status(404).json({msg: 'No se encuentra el producto'})
        }else{
            res.send(productos);

        }
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Consultar El producto')

        
    }
}

exports.actualizarProductos = async(req, res) => {
    try {
        const productos = await Productos.findOneAndUpdate(
            { _id: req.params.id },req.body
        );
        if (!productos) res.status(404).send("Producto no encontrado");
        else
            res.json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el producto ");
        
    }
};

exports.modificarProductos = async(req, res) => {
    try {
        const productos = await Productos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!productos){
            return res.status(404).send('Producto no encontrado');

        }
        res.json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar el producto ");
        
    }
}

exports.eliminarProductos = async (req, res) => {

    try {
        let productos = await Productos.findById(req.params.id);
        if(!productos){
            res.status(404).send('Producto no encontrado');

        }else{
            await Productos.findOneAndDelete({_id: req.params.id});
            res.json({msg: "el producto a sido eliminado"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar el productos ");
        
    }


}