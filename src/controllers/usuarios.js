const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const usuario = require('../models/usuario');

/// {GET}
const usuariosGet = (req, res) => {
    const { nombre, apellido, edad = 0, page = 1, limit = 10 } = req.query;

    res.json({
        name: 'gubiarpa - GET',
        nombre,
        apellido,
        edad,
        page,
        limit
    });
};


/// {POST}
const usuariosPost = async (req = request, res = response) => {
    
    const { nombre, correo, password, role, edad } = req.body;
    const usuario = new Usuario({ nombre, correo, password, role, edad });

    /// Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    /// Guardar en la BD
    await usuario.save();

    res.status(200).json({
        msg: 'User created',
        usuario
    });
};

/// {PUT}
const usuariosPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, password, google, correo, ...rest  } = req.body;
    
        if ( password ) {
            const salt = bcryptjs.genSaltSync();
            rest.password = bcryptjs.hashSync( password, salt );
        }
    
        const usuario = await Usuario.findByIdAndUpdate( id, rest );
    
        res.json({
            usuario
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
};

module.exports = { usuariosPost, usuariosPut , usuariosGet };