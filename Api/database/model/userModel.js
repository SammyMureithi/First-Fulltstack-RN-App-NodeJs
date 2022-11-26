const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    nationalId: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default:0
    },
    loogedIn: {
        type: Number,
        default:0
    }
}, {
    toObject: {
        transform: function ( doc, ret, options ) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            return ret
        }
    }
});
const User = mongoose.model( 'User', userSchema );
module.exports = User;