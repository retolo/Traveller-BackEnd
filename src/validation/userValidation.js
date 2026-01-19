import Joi from "joi";





export const changeDataUserSchema = Joi.object({
    description: Joi.string(),
    name: Joi.string(),
});

export const updateAvatarSchema  = Joi.object({
    avatar: Joi.string()
})