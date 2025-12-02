import { Router } from 'express';
import { validate } from '../../../middlewares/validator.middleware.js';
import { userController } from './user.controller.js';
import { createUserDto } from './user.schema.js';
import authMiddleware from '../../../middlewares/auth.middleware.js';

const userRoutes = Router();

/* Obtenemos todos los usuarios */
userRoutes.get('/users', authMiddleware, userController.findAll);

/* Creación de un nuevo usuario */
userRoutes.post('/register', validate(createUserDto), userController.createUser);

/* Inicio de sesión de un usuario registrado */
userRoutes.post('/login', userController.login);

export default userRoutes;
