const { response, request } = require('express');
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
    const body = req.body;
    const usuario = new Usuario(body);

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