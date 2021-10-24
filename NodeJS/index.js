const express = require("express");
const { mongoose } = require("./db.js");
const employeeController = require("./controllers/employeeController.js");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.listen(3000, () => console.log("Server started at port : 3000"));
app.use("/employees", employeeController);
