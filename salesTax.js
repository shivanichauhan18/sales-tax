knex=require("./connection.js")

var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var body=app.use(bodyParser.json());

function getTax(price,tax){
    return price*tax/100
}

    
app.post("/add-products",function(req,res){
    categoreis=["book","food","medicine"]
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}
    var tax=0.0
    if(productDetails.imported){
        tax=tax+getTax(productDetails["Price"],5)

    }if(!categoreis.includes(productDetails["category"])){
        tax=tax+getTax(productDetails["Price"],10)
    }

    productDetails["Tax"]=tax
    data=productDetails.imported
    importing=data.toString()
    productDetails["imported"]=importing
    productDetails["TotalPrice"]=productDetails["Price"]+tax
    knex.select("*").from("productBill").insert(productDetails).then((result)=>{
        res.send("product Inserted")
    }).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    });
});
    
app.listen(8000,() =>{
    console.log("listining 8000 ")
});