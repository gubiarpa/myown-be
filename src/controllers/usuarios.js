const { response, request } = require('express');

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
const usuariosPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.status(200).json({
        name: 'gubiarpa',
        nombre: nombre + ' (+1)',
        edad: edad + 1
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