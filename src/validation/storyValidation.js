import Joi from "joi";




export const createStorySchema = Joi.object({
    img: Joi.string().required(),
    title: Joi.string().required(),
    article: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.date().required()
})



export const updateStorySchema = Joi.object({
    img: Joi.string(),
    title: Joi.string(),
    article: Joi.string(),
    category: Joi.string(),
    date: Joi.date()
})



