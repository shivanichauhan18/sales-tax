// var products = require("./calculate.js")

connectDb=require("../model/connectDb")
var express = require('express');
var app = express();

var Product=express.Router()
Product.use(express.json());


Product.post("/addProduct",(req,res)=>{
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}
    response=connectDb.insertData(productDetails)
    response.then((data)=>{
        res.json(data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        res.send(err)
    })
});


// Product.get("/add_item_in_cart/:name",(req,res)=>{                                                                                                                                                                                                                                                                                                                                                                                                   
//     name=req.params.name
//     products=connectDb.selectData(name)
//     products.then((data)=>{
//         price=data[0].Price
//         res.json(price)
//     }).catch((err)=>{
//         res.send(err)
//     })
// });


module.exports=Product
