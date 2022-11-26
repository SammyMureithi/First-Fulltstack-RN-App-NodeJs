const UserService = require( '../service/userService' );
module.exports.SignUp = async ( req, res ) => {
    try {
        let addUserResult = await UserService.SignUp( req.body );
        if ( addUserResult.error ) return res.status( addUserResult.status ).send( addUserResult );
        return addUserResult;
    } catch ( error ) {
        res.status( 400 ).send( { message: error.message, error: true } );
    }
}