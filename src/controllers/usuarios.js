const { response } = require('express');

const usuariosPost = (req, res = response) => {
    res.status(200).json({
        name: 'gubiarpa'
    });
};

module.exports = { usuariosPost };