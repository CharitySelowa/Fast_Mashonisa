const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const router = express.Router()



const {getAllUsers} = require('../controllers/users');
const {login} = require("../controllers/login");



app.get('/getAllUsers',getAllUsers);
router.post('/login' , login);

module.exports = app;