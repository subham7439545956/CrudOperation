var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");
var server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// var data = mongoose.connect(
//   "mongodb://0.0.0.0:27017/messageDb",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function checkDB(error) {
//     if (error) {
//       console.log("The error:" + error);
//     } else {
//       console.log("DB Conectedddddd");
//     }
//   }
// );

const data = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Chat-DataBase", (err) => {
  if (err) {
    console.log("Database Is Not Connected");
  } else {
    console.log("DataBase Connected......");
  }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("starteedddddddd");
  }
});
