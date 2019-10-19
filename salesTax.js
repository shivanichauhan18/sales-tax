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
    categoreis=["book","food","medicine"]
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}

    var tax=0.0
    if(productDetails.imported){
        tax=tax+5.0
        if (categoreis.includes(productDetails["category"])){
            tax=tax
        }else{
            tax=tax+10.0
        }    
    }if(!categoreis.includes(productDetails["category"])){
        tax=tax+10.0
    }
    productTax=getTax(productDetails["Price"],tax)

    productDetails["Tax"]=productTax
    productDetails["TotalPrice"]=productDetails["Price"]+productTax
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