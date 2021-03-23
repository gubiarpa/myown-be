const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

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
    // check('rol', 'No es un rol válido').not().isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( async (role = '') => {
        const roleExists = await Role.findOne({ role });
        if ( !roleExists ) {
            throw new Error(`El rol ${role} no está registrado en la BD.`);
        }
    }),
    validarCampos
], usuariosPost);

/// {PUT}
router.put('/:id', usuariosPut);

module.exports = router;