import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,}$')),
    repeatPassword: Joi.ref('password')
})