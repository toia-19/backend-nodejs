import joi from "joi";

/* Esquema de creación de usuario */
export const createUserDto = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string(),
});
