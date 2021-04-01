const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/fieldValidation');
const { isValidRole, existsEmail, existsUserById } = require('../helpers/db-validators')

const { usuariosPost, usuariosPut, usuariosGet } = require('../controllers/usuarios');

const router = Router();

/// {GET}
router.get('/', usuariosGet);

/// {POST}
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( existsEmail ),
    check('role').custom( isValidRole ),
    validarCampos
], usuariosPost);

/// {PUT}
router.put('/:id', [
    check('id', 'No es un ID Válido').isMongoId(),
    check('id').custom( existsUserById ),
    check('role').custom( isValidRole ),
    validarCampos
],
usuariosPut);

module.exports = router;