import { DataSource } from 'typeorm';
import { envs } from './envs.js';
import { user } from '../modules/user/entity/user.entity.js';

export const AppDataSource = new DataSource({
    type: 'mysql',
    database: envs.DATABASE,
    username: envs.DB_USER,
    password: envs.DB_PASS,
    port: envs.DB_PORT,
    host: envs.DB_HOST,
    synchronize: true,
    logging: true,
    entities: [user],
});

export default AppDataSource;