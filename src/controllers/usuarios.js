const { response } = require('express');

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(200).json({
        name: 'gubiarpa',
        nombre: nombre + ' (+1)',
        edad: edad + 1
    });
};

module.exports = { usuariosPost };