const pg = require('pg')
var client = new pg.Client('postgres://axhlhhhf:rQakYre394-bBwawuAWzGQJmPWsMi1IR@mouse.db.elephantsql.com/axhlhhhf');;
client.connect(function(err){
  if (err) {
    console.log("Database connection error");
    console.log(err)
  }else
  {
    console.log("Database connected successfully");
  }
  
})

module.exports = client;