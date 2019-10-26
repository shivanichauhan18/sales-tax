var cartDb=require("../model/cartDb")
var products = require("./calculate.js")
var express = require('express');

var cart=express.Router()
cart.use(express.json());

function ProDetail(product){
    var tax=0;
    var price=0;
    var totalPro={};
    var productWithTa=[];
    for (var i=0;  i<product.length; i++){
        var productDetails=products(product[i])
        tax=tax+productDetails["Tax"]
        price=price+productDetails["quantityPrice"]
        productWithTa.push(productDetails)

    }totalPro["totalBill"]=price
    totalPro["totalTax"]=tax
    productWithTa.push(totalPro);
    return productWithTa;

}     

cart.get("/:name/:quantity",(req,res)=>{
        var qua=req.params.quantity                                                                                                                                                                                                                                                                                                                                                                                         
        var name=req.params.name
        id=req.body.No
        products=cartDb.selectData(name)
        products.then((data)=>{
        inserting=cartDb.insertion(data[0],qua,id)
        return inserting
        }).then((result)=>{
            res.json("data inserted")
        })
        .catch((err)=>{
            res.send(err)
        });
}); 

cart.get("/produts",(req,res)=>{
    var cartProduts=cartDb.getData()
    cartProduts.then((productsD)=>{
        // var productDetails=products(productsD[0])

    data=ProDetail(productsD)
    res.json(data)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

module.exports=cart