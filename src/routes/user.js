const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosPost, usuariosPut, usuariosGet } = require('../controllers/usuarios');

const router = Router();

/// {GET}
router.get('/', usuariosGet);

/// {POST}
router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
], usuariosPost);

/// {PUT}
router.put('/:id', usuariosPut);

module.exports = router;