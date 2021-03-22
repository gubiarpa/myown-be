const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/fieldValidation');

const { usuariosPost, usuariosPut, usuariosGet } = require('../controllers/usuarios');

const router = Router();

/// {GET}
router.get('/', usuariosGet);

/// {POST}
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], usuariosPost);

/// {PUT}
router.put('/:id', usuariosPut);

module.exports = router;