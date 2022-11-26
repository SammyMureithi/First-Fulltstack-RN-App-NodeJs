const mongoose = require( 'mongoose' );
module.exports.connection =async ()=> {
    try {
        await mongoose.connect( "mongodb://127.0.0.1/myApi", { useNewUrlParser: true }  );
        console.log( 'Db Connected Successfully' );
    } catch (error) {
        throw new Error("Error Coonecting to Database"+error)
    }
}