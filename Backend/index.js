const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();

const user = require('./routes/users');

var corsOptions = {
  origin: "*",
  
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(5050, () => {
  console.log("Server running on port 5050");
});


app.use("/users", user); // User endpoint API



