knex = require("./connection.js")
var products = require("./calculate.js")
var express = require('express');
var app = express();
app.use(express.json());
var router=express.Router()



router.post("/addProduct",function(req,res){
    
    productDetails={"Product":"jal","imported":"true","category":"food","Price":10.99}

    let products=products(productDetails)
    
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