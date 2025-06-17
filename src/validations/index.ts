import Joi from 'joi'

export const subscribeSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.label('email'),
})
