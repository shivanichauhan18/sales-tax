
    // categoreis=["book","food","medicine"]

    // var tax=0.0
    // if(productDetails.imported){
    //     tax=tax+getTax(productDetails["Price"],5)

    // }if(!categoreis.includes(productDetails["category"])){
    //     tax=t
    // dataType=(product.imported).toString()
    // product["imported"]=dataType
    
    // pax+getTax(productDetails["Price"],10)
    // }

    // productDetails["Tax"]=tax
    // dataType=(productDetails.imported).toString()

    // productDetails["imported"]=dataType
    // productDetails["TotalPrice"]=productDetails["Price"]+tax

knex = require("./connection.js")
var productDetails = require("./calculate.js")
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function getTax(price,tax){
    return price*tax/100
}
app.post("/add_products1",function(req,res){
    categoreis=["book","food","medicine"]
    productDetails='[{"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}]';

    data = data.toString();
    var Data = JSON.parse(data)
    data=JSON.stringify(Data);


    var tax=0.0
    if(productDetails.imported){
        tax+=getTax(productDetails["Price"],5)

    }if(!categoreis.includes(productDetails["category"])){
        tax+=getTax(productDetails["Price"],10)
    }

    productDetails["Tax"]=tax
    // stage=productDetails.imported.toString()
    // productDetails["imported"]=stage
    productDetails["TotalPrice"]=productDetails["Price"]+tax
    // data=JSON.stringify(Data);

    knex.insert(data).then((result)=>{
        res.send("product Inserted")
    }).catch((err)=>{
        res.send(err)
    });
});


// app.post("/add_products", function (req, res) {

//     productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}
//     // data=getProductTax(productDetails)
//     categoreis=["book","food","medicine"]

//     var tax=0.0
//     if(productDetails.imported){
//         tax=tax+getTax(productDetails["Price"],5)

//     }if(!categoreis.includes(productDetails["category"])){
//         tax=tax+getTax(productDetails["Price"],10)
//     // dataType=(product.imported).toString()
//     // product["imported"]=dataType
    
//     // pax+getTax(productDetails["Price"],10)
//     }

//     productDetails["Tax"]=tax
//     dataType=(productDetails.imported).toString()

//     productDetails["imported"]=dataType
//     productDetails["TotalPrice"]=productDetails["Price"]+tax

//     knex.insert(productDetails).then((result) => {
//         res.send("product Inserted")
//     }).then((result) => {
//         res.send(result)
//     }).catch((err) => {
//         res.send(err)
//     });
// });

app.listen(8000, () => {
    console.log("listining 8000 ")
});










// app.post("/add_products", function (req, res) {

//     productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}
//     // data=getProductTax(productDetails)
//     categoreis=["book","food","medicine"]

//     var tax=0.0
//     if(productDetails.imported){
//         tax=tax+getTax(productDetails["Price"],5)

//     }if(!categoreis.includes(productDetails["category"])){
//         tax=tax+getTax(productDetails["Price"],10)
//     // dataType=(product.imported).toString()
//     // product["imported"]=dataType
    
//     // pax+getTax(productDetails["Price"],10)
//     }

//     productDetails["Tax"]=tax
//     dataType=(productDetails.imported).toString()

//     productDetails["imported"]=dataType
//     productDetails["TotalPrice"]=productDetails["Price"]+tax

//     knex.insert(productDetails).then((result) => {
//         res.send("product Inserted")
//     }).then((result) => {
//         res.send(result)
//     }).catch((err) => {
//         res.send(err)
//     });
// });