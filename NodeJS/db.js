const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://debi:99704160@cluster0.qvdqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err) => {
    !err
      ? console.log("MongoDB Connection succeded...")
      : console.log(
          "Error in MongoDB Connection: " + JSON.stringify(err, undefined, 2)
        );
  }
);

module.exports = mongoose;
