const Joi = require( '@hapi/joi' );

module.exports.SignUp = Joi.object().keys( {
    fullname: Joi.string().required(),
    username: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    nationalId: Joi.number().required(),
    password: Joi.string().required(),
} );
module.exports.Login = Joi.object().keys( {
    username: Joi.string().required(),
    password: Joi.string().required()
} );