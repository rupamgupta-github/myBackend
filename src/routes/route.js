const express = require("express");
const router = express.Router();

router.get("/students/:name", function (req, res) {
  let studentName = req.params.name;
  console.log(studentName);
  res.send(studentName);
});

router.get("/random", function (req, res) {
  res.send("hi there");
});

router.get("/test-api", function (req, res) {
  res.send("hi FunctionUp");
});

router.get("/test-api-2", function (req, res) {
  res.send("hi FunctionUp. This is another cool API");
});

router.get("/test-api-3", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's "
  );
});

router.get("/test-api-4", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-5", function (req, res) {
  res.send(
    "hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-6", function (req, res) {
  res.send({ a: 56, b: 45 });
});

router.post("/test-post", function (req, res) {
  res.send([23, 45, 6]);
});

router.post("/test-post-2", function (req, res) {
  res.send({ msg: "hi", status: true });
});

router.post("/test-post-3", function (req, res) {
  // let id = req.body.user
  // let pwd= req.body.password

  // console.log( id , pwd)

  console.log(req.body);

  res.send({ msg: "hi", status: true });
});

router.post("/test-post-4", function (req, res) {
  let arr = [12, "functionup"];
  let ele = req.body.element;
  arr.push(ele);
  res.send({ msg: arr, status: true });
});

let players = [
  {
    name: "Rupam",
    dob: "20/07/2000",
    gender: "male",
    city: "Gujarat",
    sports: ["Cricket"],
  },
  {
    name: "Dev",
    dob: "15/09/2000",
    gender: "male",
    city: "Azamgarh",
    sports: ["Volleyball"],
  },
  {
    name: "Uttam",
    dob: "21/04/2004",
    gender: "male",
    city: "Mumbai",
    sports: ["swimming"],
  },
  {
    name: "Shrikant",
    dob: "26/05/1999",
    gender: "male",
    city: "Delhi",
    sports: ["basketball"],
  },
];

router.post("/players", function (req, res) {
  console.log(players);
  let newplayer = req.body;
  let found = req.body.name;
  console.log("New Players Found :- ", newplayer);
  for (i of players) {
    if (i.name == found) {
      return res.send("name already exists");
    }
  }
  players.push(newplayer);
  res.send({ msg: players, status: true });
});

module.exports = router;
