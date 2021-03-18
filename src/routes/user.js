const { Router } = require('express');
const { usuariosPost, usuariosPut, usuariosGet } = require('../controllers/usuarios');

const router = Router();

/// {GET}
router.get('/', usuariosGet);

/// {POST}
router.post('/', usuariosPost);

/// {PUT}
router.put('/:id', usuariosPut);

module.exports = router;