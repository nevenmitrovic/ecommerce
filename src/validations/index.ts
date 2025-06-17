import Joi from 'joi'

export const subscribeSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.label('email')
		.messages({
			'string.email': 'Please enter a valid email address',
			'any.required': 'Email is required',
		}),
})
