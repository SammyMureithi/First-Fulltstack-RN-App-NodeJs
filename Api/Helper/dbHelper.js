module.exports.formatMongoData = ( data ) => {
    if ( Array.isArray( data ) ) {
        for ( value in data ) {
            return value.toObject();
        }
    }
    return data.toObject();
}