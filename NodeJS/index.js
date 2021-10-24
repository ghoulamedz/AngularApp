const express = require("express");
const { mongoose } = require("./db.js");
const employeeController = require("./controllers/employeeController.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({ origin: "http://localhost:4200" }));
app.listen(3000, () => console.log("Server started at port : 3000"));
app.use("/employees", employeeController);
