var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var port = 3000;
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/index", function(req, res) {
  res.sendFile("./index.html");
});

app.post("/data", function(req, res) {
  var data = req.body.data;
  // convertCsv(data);

  var cvsData = convertCsv(data);
  res.send(cvsData);
});
var arrayData =[];
function convertCsv(data) {
function 
  
  var allData= arrayData.push(data.firstName +","+data.firstName+","+data.firstName+","+data.firstName+"\n");

  for (i = 0; i <= 7; i++) {
  var inner = convertCsv(data.children[i])
  var inner = convertCsv(data)


  // if (typeof data === "object") {
  if (data) {
    //for (i = 0; i <= 7; i++) {
    var arrayData = Object.keys(data).map(i => data[i]);
    console.Console.log(arrayData);
    return arrayData;
  }

  //   }
}

app.listen(port, () => {
  console.log("server is listening on 3000");
});
