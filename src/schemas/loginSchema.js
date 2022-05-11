import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,}$')),
})