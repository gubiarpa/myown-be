const Usuario = require('../models/usuario');
const Role = require('../models/role');

const isValidRole = async (role = '') => {
    const roleExists = await Role.findOne({ role });
    if ( !roleExists ) {
        throw new Error(`El rol ${ role } no está registrado en la BD.`);
    }
}

const existsEmail = async (email = '') => {
    const correo = await Usuario.findOne({ correo: email });
    if ( correo ) {
        throw new Error(`El mail ${ email } ya existe en la BD.`);
    }
}

const existsUserById = async (id = '') => {
    const user = await Usuario.findById(id);
    if (!user) {
        throw new Error(`El usuario con id = ${ id } no existe en la BD`);
    }
}

module.exports = {
    isValidRole,
    existsEmail,
    existsUserById
}