var express = require('express');
var app = express();

var tax=require("./routs/product")

var cart=require("./routs/cartProducts")

app.use("/routs/product",tax)

app.use("/routs/cartProducts",cart)

app.listen(8000, () => {
    console.log("listining 8000 ")
});