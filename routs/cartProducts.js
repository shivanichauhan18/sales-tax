connectDb=require("../model/connectDb")

var express = require('express');
var app = express();

var cart=express.Router()
cart.use(express.json());

cart.get("/add_item_in_cart/:name",(req,res)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    name=req.params.name
    products=connectDb.selectData(name)
    products.then((data)=>{
        price=data[0].Price
        res.json(price)
    }).catch((err)=>{
        res.send(err)
    })
});

