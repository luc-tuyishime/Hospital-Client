import Joi from 'joi-browser';

export default Joi.object().keys({
    firstName: Joi.string()
        .min(5)
        .max(45)
        .required()
        .label('firstName'),
    lastName: Joi.string()
        .min(5)
        .max(45)
        .required()
        .label('lastName'),
    birth: Joi.date().required(),
    sex: Joi.string()
        .required()
        .label('Gender'),
    parentId: Joi.string()
        .required()
        .label('ParentId')
});
