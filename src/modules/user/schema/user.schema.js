import joi from "joi";

export const createUserDto = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string(),
});

export const updateUserDto = joi.object({
    name: joi.string().min(3),
    email: joi.string().email(),
    password: joi.string().min(6),
});