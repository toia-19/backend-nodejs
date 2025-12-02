import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { envs } from './envs.js';
import { AppDataSource } from './datasource.provider.js';

const userRepository = AppDataSource.getRepository('User');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: envs.JWT_SECRET,
};

passport.use(
    new Strategy(opts, async (payload, done) => {
        try {
            /* Identificamos existencia del usuario en base de datos */
            const user = await userRepository.findOne({ where: { id: payload.id } });

            /* Si no existe, devolvemos false */
            if (!user) return done(null, false);

            /* Caso contrario, se devuelve información del usuario */
            return done(null, user);

        } catch (err) {
            return done(err, false);
        }
    })
);

export default passport;
