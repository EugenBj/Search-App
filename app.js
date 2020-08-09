const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fetch = require('node-fetch');

const app = express();
const API = 'https://jsonplaceholder.typicode.com/posts';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/home.html")
// });

// app.post("/", function(req, res){
//
//   const userId = req.body.userId;
// }
//
// app.post("/", function(req, res){
//   var userId = req.body.userId;
//   // res.redirect("/")
//   // console.log(userId);
// });

app.get('/', (req, res) => {
  fetch(API)
    .then(response => response.json())
    .then(json => {
      //return json objects
      console.log(json);
      //for specific field
      // console.log(json.map(todo => todo.userId));
    });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
