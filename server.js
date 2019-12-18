// jshint esversion:6

const express = require('express')
const app = express()

app.get("/", function(request, response){
  response.send("<h1>Hello world</h1>")
})
app.get("/contact", function(request, response){
  response.send("<h1>Contact me</h1>")
})

app.get("/aboutme", function(req, res){
  res.send("My name is babu. I like testing.")
})

app.listen(3000, function (){
  console.log("server started on the port 3000.")
});
