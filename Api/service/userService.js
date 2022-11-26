const User = require( '../database/model/userModel' );
const Constants = require( '../Constants/index' );
const bcrypt = require( 'bcrypt' );
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
        response.body =  formatMongoData.formatMongoData(resultUser);

    } catch (error) {
        response.message = error.message;
    }
    return response;
}