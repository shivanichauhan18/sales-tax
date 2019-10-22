// var products = require("./calculate.js")

connectDb=require("../model/connectDb")

var express = require('express');
var app = express();

var router=express.Router()
router.use(express.json());


router.post("/addProduct",(req,res)=>{
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}

    data=productDetails.imported.toString()
    productDetails.imported=data
    
    response=connectDb(productDetails)
    res.json({ success: true, message: 'ok' });
})






module.exports=router
