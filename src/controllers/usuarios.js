const { response } = require('express');

/// {POST}
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(200).json({
        name: 'gubiarpa',
        nombre: nombre + ' (+1)',
        edad: edad + 1
    });
};

/// {PUT}
const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        name: 'gubiarpa',
        id: id * 1 + 1
    });
};

module.exports = { usuariosPost, usuariosPut };