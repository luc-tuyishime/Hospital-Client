import Joi from 'joi-browser';
import newHospital from './schemas/newHospital';
import newUser from './schemas/newUser';
import loginUser from './schemas/loginUser';
import newParent from './schemas/newParent';
import newChild from './schemas/newChild';
import newVaccin from './schemas/newVaccin';

export default (inputs, schema) => {
    const errors = {};
    const validateSchemas = {
        newHospital,
        newUser,
        loginUser,
        newParent,
        newChild,
        newVaccin
    };
    const { error } = Joi.validate(inputs, validateSchemas[schema], { abortEarly: false });

    if (error && typeof error === 'object' && Object.keys(error).length) {
        error.details.forEach((err) => {
            errors[err.path[0]] = err.message.replace(/"/g, '');
        });
    }

    return errors;
};
