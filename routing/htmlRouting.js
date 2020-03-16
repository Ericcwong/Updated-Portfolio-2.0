const path = require("path");

module.exports = function(app){
    //Creating routing for home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));
    });

};