const express = require( 'express' );
const app = express();
const dbCoonection = require( './database/connection' );

dbCoonection.connection();