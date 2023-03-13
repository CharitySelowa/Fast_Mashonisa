const express = require('express')
const app = express();
const bodyparser = require('body-parser')

const {getAllUsers} = require('../controllers/users')




app.get('/getAllUsers',getAllUsers)

module.exports = app;