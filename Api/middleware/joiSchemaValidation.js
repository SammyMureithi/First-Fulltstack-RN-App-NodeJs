const validateObject = ( data, schema ) => {
    const errorSchema = schema.validate( data );
    if ( errorSchema.error ) return true;
    else return false;
}
module.exports.validateBody = ( schema ) => {
    return ( req, res, next ) => {
        const errorFromSchemaTest = validateObject( req.body, schema );
        if ( errorFromSchemaTest ) return res.status( 400 ).send( { error: true, message: "Invalid Fields or Fields Types" } );
        return next();
    }
}