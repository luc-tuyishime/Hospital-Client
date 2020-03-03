import Joi from 'joi-browser';
import newHospital from './schemas/newHospital';

export default (inputs, schema) => {
    const errors = {};
    const validateSchemas = {
        newHospital
    };
    const { error } = Joi.validate(inputs, validateSchemas[schema], { abortEarly: false });

    if (error && typeof error === 'object' && Object.keys(error).length) {
        error.details.forEach((err) => {
            errors[err.path[0]] = err.message.replace(/"/g, '');
        });
    }


    return errors;
};
