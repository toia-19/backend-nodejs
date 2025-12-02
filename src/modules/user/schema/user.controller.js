import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { request, response } from 'express';
import { AppDataSource } from '../../../configuration/datasource.provider.js';
import { envs } from '../../../configuration/envs.js';

const userRepository = AppDataSource.getRepository('User');

/**
 * @description Creación de un nuevo usuario
 */
const createUser = async (req = request, res = response) => {
    // const user = req.body;

    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // const newUser = await userRepository.save(user);
        const newUser = await userRepository.save({ name, email, password: hashedPassword });

        res.status(201).json({ ok: true, user: newUser, msg: 'Usuario creado' });

    } catch (error) {
        res.status(400).json({ ok: false, error, msg: 'Error' });
    }
};

/**
 * @description Inicio de sesión por email y contraseña
*/
const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const user = await userRepository.findOne({ where: { email } });

        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return res.status(401).json({ msg: 'Credenciales inválidas' });

        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, envs.JWT_SECRET, { expiresIn: '1h' });

        res.json({ ok: true, msg: 'Inicio de sesión éxitoso', token });
    } catch (error) {
        res.status(500).json({ error });
    }
};

/**
 * @description Búsqueda de todos los usuarios
*/
const findAll = async (req = request, res = response) => {
    const users = await userRepository.find();

    res.json({ ok: true, msg: 'Encontrados', data: users });
};

export const userController = {
    createUser,
    login,
    findAll
};
