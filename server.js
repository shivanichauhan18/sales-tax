var express = require('express');
var app = express();

var tax=require("./routs/product")
app.use("/routs/product",tax)


app.listen(8000, () => {
    console.log("listining 8000 ")
});