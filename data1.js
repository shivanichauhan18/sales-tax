knex = require("./connection.js")
var productDetails = require("./calculate.js")
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function getTax(price,tax){
    return price*tax/100
}

app.post("/post",function(req,res){
    categoreis=["book","food","medicine"]
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}

    var tax=0.0
    if(productDetails.imported){
        tax+=getTax(productDetails["Price"],5)

    }if(!categoreis.includes(productDetails["category"])){
        tax+=getTax(productDetails["Price"],10)
    }

    productDetails["Tax"]=tax
    stage=productDetails.imported.toString()
    productDetails["imported"]=stage
    productDetails["TotalPrice"]=productDetails["Price"]+tax
    // data=JSON.stringify(productDetails);

    knex.insert(data).then((result)=>{
        res.send("product Inserted")
    }).catch((err)=>{
        res.send(err)
    });
});




app.listen(8000, () => {
    console.log("listining 8000 ")
});