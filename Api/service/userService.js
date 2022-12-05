const User = require( '../database/model/userModel' );
const Constants = require( '../Constants/index' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const formatMongoData = require( '../Helper/dbHelper' );
module.exports.SignUp = async ( { fullname, username, nationalId, phoneNumber, password } ) => {
    let response = { ...Constants.MESSAGES.serverDefaultResponse };
    try {
        let user = await User.findOne( { $or: [{ fullname }, { username }, { nationalId }, { phoneNumber }] } );
        if ( user ) {
            response.message = Constants.MESSAGES.user.USER_EXIST;
            return response;
        }
        let salt = await bcrypt.genSalt( 12 );
        password = await bcrypt.hash( password, salt );
        const newUser = await User( {
            fullname, username, nationalId, phoneNumber, password
        } );
        const resultUser = await newUser.save();
        response.body = formatMongoData.formatMongoData( resultUser );
        response.status = 200;

    } catch (error) {
        response.message = error.message;
    }
    return response;
}
module.exports.Login = async ( { username, password } ) => {
    let response = { ...Constants.MESSAGES.serverDefaultResponse };
    try {
        const existUsers = await User.findOne( { username } );
        if ( !existUsers ) return { error: true, message: "Invalid username or Password" };
        let validPasword = await bcrypt.compare( password, existUsers.password );
        if ( !validPasword ) return { error: true, message: "Invalid username or Password" };
        const token = jwt.sign( {id:existUsers._id}, process.env.SECRET_KEY || 'my-secrete-key', { expiresIn: "1d" } );
        let resultUser = formatMongoData.formatMongoData( existUsers );
        resultUser.signature = token;
        return { resultUser, message: "Login Successfull", error: false };
    } catch (error) {
        return error.message
    }
}