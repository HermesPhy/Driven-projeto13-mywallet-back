import Joi from "joi";

export const itemSchema = Joi.object({
    value: Joi.number().required().positive(),
    description: Joi.string().required(),
    type: Joi.string().required().valid('entrada', 'saída'),
    date: Joi.string().required()
})