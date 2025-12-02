import express from 'express';
import { envs } from './configuration/envs.js';
import userRoutes from './modules/user/schema/user.route.js';
import { AppDataSource } from './configuration/datasource.provider.js';

const app = express();

app.use(express.json());

// app.use('/users', userRoutes);

app.set('port', envs.PORT);

app.use(userRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => {
        console.error('Error al conectar la base de datos:', error);
    });

export default app;