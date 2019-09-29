const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName: String,
    joined: {
        type: Date,
        default: Date.now
    },
    password: String,
    active: Boolean
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;