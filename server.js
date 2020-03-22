const express = require("express");
const path = require("path");
const app = express(),
    server = require("https").createServer(app),
    io = io.listen(server);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//Calling in html file
require("./routing/htmlRouting")(app);
server.listen(80);