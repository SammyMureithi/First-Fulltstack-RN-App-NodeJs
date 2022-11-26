const express = require( 'express' );
const userRoute = express.Router();
const userContoller = require( '../controller/userController' );
const userSchema = require( '../apiSchema/userSchema' );
const joiSchemaValidation = require( '../middleware/joiSchemaValidation' );
userRoute.post( '/SignUp',joiSchemaValidation.validateBody(userSchema.SignUp) ,userContoller.SignUp);
module.exports = userRoute;