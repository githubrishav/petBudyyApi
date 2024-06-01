const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        name:{
                type: String,
                required: true,
        },
        phoneNumber:{
                type: String,
                required: true,
                unique: true
        },
        email:{
                type: String,
                required: true,
                unique: true
        },
        message:{
                type: String
        },
        location:{
                type: String,
                required: true
        }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;