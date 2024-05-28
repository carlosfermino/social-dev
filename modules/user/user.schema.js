import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(100),
  password: Joi.string().required().max(50).min(6),
  //password: Joi.string().pattern(new RegExp('^[a-zA-Z0-6]{3,30}$')),
  //repeat_password:Joi.ref('password'),
})