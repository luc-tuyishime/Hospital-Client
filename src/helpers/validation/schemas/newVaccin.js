import Joi from 'joi-browser';

export default Joi.object().keys({
    childId: Joi.string()
        .required()
        .label('ChildId'),
    type: Joi.string()
        .required()
        .label('type'),
    vaccinationDate: Joi.date()
        .required()
        .label('Vaccination Date')
});
