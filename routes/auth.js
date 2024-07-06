const express = require('express');
const router = express.Router();
const {check} = require("express-validator");
const authController = require ("../controller/authController");
const auth = require("../middleware/auth");

// autenticar el usuario
// api/auth

router.post(
    "/",
    [
       check("email", "agregar un email valido"). isEmail(),
       check("password", "el password debe tener minimo 10 caracteres").isLength({
        min: 10,
       }),
    ],
    authController.autenticarUsuario
);

router.get('/',auth, authController.usuarioAutenticado);
module.exports = router;