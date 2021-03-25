const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

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

    /// Verificar si el correo es válido
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        res.status(400).json({ msg: 'El correo ya existe en la BD' });
        return;
    }

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
const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.json({
        name: 'gubiarpa',
        id: id * 1 + 1
    });
};

module.exports = { usuariosPost, usuariosPut , usuariosGet};