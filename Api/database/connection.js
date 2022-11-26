const mongoose = require( 'mongoose' );


module.exports=async()=> {
    try {
        await mongoose.connect( "mongodb://127.0.0.1/myProjectApi", { useNewUrlParser: true }  );
        console.log( 'Db Connected Successfully' );
    } catch (error) {
        throw new Error("Error Coonecting to Database"+error)
    }
}