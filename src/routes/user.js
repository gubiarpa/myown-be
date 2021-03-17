const { Router } = require('express');
const { usuariosPost, usuariosPut } = require('../controllers/usuarios');

const router = Router();

/// {POST}
router.post('/', usuariosPost);

/// {PUT}
router.put('/:id', usuariosPut);

module.exports = router;