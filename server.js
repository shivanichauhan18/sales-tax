var express = require('express');
var app = express();

var tax=require("./new_sales_tax.js")
app.use("/new_sales_tax",tax)

app.listen(8000, () => {
    console.log("listining 8000 ")
});