const express = require('express');

const app = express();

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

  //add models
const database = require('./models');

//add controllers
const controllers = require('./controllers');
app.post('/api/user', controllers.UserController.createUser);
// app.post('/api/signin', controllers.UserController.signinUser);
// app.patch('/api/user/:id', controllers.UserController.updatePassword);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is running on http://localhost:3000/');
});