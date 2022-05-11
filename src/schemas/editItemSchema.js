import Joi from "joi";

export const editItemSchema = Joi.object({
    value: Joi.number().required().positive(),
    description: Joi.string().required()
})