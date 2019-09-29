const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/email', { useNewUrlParser: true });

const userModel = require('./user');

module.exports = {
  User: userModel
};