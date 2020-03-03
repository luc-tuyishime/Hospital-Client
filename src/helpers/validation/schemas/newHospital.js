import Joi from 'joi-browser';

export default Joi.object().keys({
  name: Joi.string()
    .min(6)
    .max(45)
    .required()
    .label('Name'),
  email: Joi.string()
    .min(6)
    .max(100)
    .required(),
  password: Joi.string()
    .min(8)
    .max(100)
    .required(),
});
