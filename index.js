const express = require("express");
const app = express();
let port = process.env.port || 3000;
const importData = require("./data.json");



app.get("/", (req, res) => {
    res.send("Hello");
});


app.get("/burclar",(req,res)=>{
    res.send(importData);
})


app.listen(port,()=>{
    console.log("API aktif.");
})
