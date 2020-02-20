import Joi from '@hapi/joi'

const message = Joi.object().keys({
  message: Joi.string().min(1).max(100).required(),
  author: Joi.string(),
  email: Joi.string().email().required()
})

export { message }
