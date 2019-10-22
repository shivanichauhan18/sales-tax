// knex = require("./connection.js")
var products = require("./calculate.js")
var express = require('express');
var app = express();
app.use(express.json());

var router=express.Router()



router.post("/addProduct",function(req,res){
    
    productDetails={"Product":"jal","imported":"true","category":"food","Price":10.99}

    let products=products(productDetails)
    // var salseTax=0;
    // if(productDetails.imported){
    //     salseTax+=getTax(productDetails["Price"],5);
    // }
    // if(!categories.includes(productDetails.category)){
    //     salseTax+=getTax(productDetails["Price"],10);
    // }
    // stage=productDetails.imported.toString()

    // productDetails["imported"]=stage
    // productDetails["Tax"]=salseTax
    // productDetails["TotalPrice"]=productDetails["Price"]+salseTax
    knex('productBill').insert(products)
    .then((result)=>{
        return res.json({ success: true, message: 'ok' });
    }).catch((err)=>{
        res.send(err)
    });
})

app.listen(8000, () => {
    console.log("listining 8000 ")
});

module.exports=router;