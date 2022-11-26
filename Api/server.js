const express = require( 'express' );
const app = express();
const dbConnection = require( './database/connection' );
const cors = require( 'cors' );
const userRoute = require( './routes/userRoutes' );

app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

dbConnection();

//Lets now Establish Our Routes
app.use( '/api/v1/Users', userRoute );
app.listen( process.env.PORT || 3000, () => {
    console.log('Listening TO port 3000')
})