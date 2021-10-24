const express = require("express");
const router = express.Router();
const { Employee } = require("../models/employee.js");
const ObjectId = require("mongoose").Types.ObjectId;

// GET localhost:3000/employees/
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving Employees collection :" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with given id : ${req.params.id}`);
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in retrieving Employee record :" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with given id : ${req.params.id}`);
  const emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in updating Employee record :" +
            JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with given id : ${req.params.id}`);
  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in deleting Employee record :" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  const emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  emp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in saving Employee to database :" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
