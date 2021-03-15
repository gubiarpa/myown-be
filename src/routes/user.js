const { Router } = require('express');
const { usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.post('/all', usuariosPost);

module.exports = router;