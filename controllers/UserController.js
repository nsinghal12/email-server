//connecting db
const mongoose = require('mongoose');

const utils  = require('../utils');

//adding models
const database = require('../models');

function createUser(request,response){

    console.log("Creating new user: ", request);

    //getting post req data from body
    let userName = request.body.userName;
    let password = request.body.password;

    console.log("userName empty", userName);

    console.log("password empty", password);

    //emtpy checks
     if (utils.isEmpty(userName)) {
        console.log("userName empty");
        response.status(406).send('userName is required');
        return;
    }

    if (utils.isEmpty(password)) {
        console.log("password empty");
        response.status(406).send('password is required');
        return;
    }

    let user = {
        userName : userName,
        password : password
    }

    database.User.findById(userName, function (error, saved) {
        if(error) {
            console.log('user doesnt exist: ', error);
            newUser(user,response);
        }

        return;
    })
}

function newUser(request, response){
    
    //create user
    database.User.create(request, function (error, newUser) {
        if(error) {
            console.log('Error creating new user: ', error);

            response.status(500).send('insert of new suer into database failed');
            return;
        }

        console.log('New user is created as: ', newUser);
        return response.json(newUser);
    });
}

function signUser(request, response){
    console.log("In signup user");
    return;
}

function updatePassword(request, response){
    console.log("In updatePassword user");
    return;
}

// exporting signin for other files
module.exports = {
    createUser : createUser,
    signUser : signUser,
    updatePassword : updatePassword
};