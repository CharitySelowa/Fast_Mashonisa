const client = require("../config/db_config");


exports.getAllUsers = async (req, res) => {
  try {
        //get all post form the database
        const data = await client.query(
          `SELECT * FROM users`,
          
          (err,result) => {
            if (err) {
           //If post are not available is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send(result.rows);
            }
          }
        );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while selecting post!", //Database connection error
    });
  }
};