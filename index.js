const express = require("express");
const app = express();
const importData = require("./data.json");



app.get("/", (req, res) => {
    res.send("Hello");
});


app.get("/burclar",(req,res)=>{
    res.send(importData);
})


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
