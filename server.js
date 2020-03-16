const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 9000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//Calling in html file
require("./routing/htmlRouting")(app);
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`))