import Joi from 'joi-browser';

export default Joi.object().keys({
    firstName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('firstName'),
    lastName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('lastName'),
    username: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('username'),
    email: Joi.string()
        .min(6)
        .max(100)
        .required(),
    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
    role: Joi.string()
        .min(5)
        .max(45)
        .required()
        .label('role'),
    phone: Joi.string()
        .required()
        .label('Phone')
});
