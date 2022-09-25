const express = require("express");
const app = express();
const importData = require("./data.json");
var fs = require("fs");

app.get("/", (req, res) => {
    res.send("Hello");
});


app.get('/burclar', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["burc" + req.params.id]
        res.end(JSON.stringify(user));
    });
})



app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
