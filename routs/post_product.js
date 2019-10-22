// var knex=require("knex")({
//     client:"mysql",
//     connection:{
//         host     : '127.0.0.1',
//         user: 'root',
//         database: 'salesTax',
//         password: 'shivani123'
//     }
// })


// knex = require("./connection.js")

var products = require("./calculate.js")
var express = require('express');
var app = express();
app.use(express.json());


app.post("/addProduct",(req,res)=>{
    productDetails={"Product":req.body.Product,"imported":req.body.imported,"category":req.body.category,"Price":req.body.Price}

    let product=products(productDetails)

    // knex('productBill').insert(product)
    // .then((result)=>{
    //     return res.json({ success: true, message: 'ok' });
    // }).catch((err)=>{
    //     res.send(err)
    // });
    
})


app.listen(8000, () => {
    console.log("listining 8000 ")
});

