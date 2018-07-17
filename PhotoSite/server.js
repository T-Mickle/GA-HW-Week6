const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

require('./db/db');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
  extended:false
}));

const userController = require('./controller/users');

app.use('users', userController);

app.listen(3000, ()=>{
  console.log('Connected to port 3000')
})