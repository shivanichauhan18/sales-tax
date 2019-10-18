var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var body=app.use(bodyParser.json());

var knex=require("knex")({
    client:"mysql",
    connection:{
        host     : '127.0.0.1',
        user: 'root',
        database: 'salesTax',
        password: 'shivani123'
    }
})

app.post("/add-products",function(req,res){

    data_list=["book","food","medicine"]  
    var obj={"Product":req.body.Product,"Country":req.body.Country,"Stage":req.body.Stage,"Price":req.body.Price}
    if (data_list.includes(obj["Stage"]) && ["india"].includes(obj["Country"])){
        obj["Tax"]=0.00
        var price=obj["Price"]
        obj["Total_price"]=price
        var condition=false


    }if(!condition){
        tax=5.0
        price=obj["Price"]
        var tax=price*tax/100
        var total_price=price+tax
        obj["Tax"]=tax
        obj["Total_price"]=total_price

       
    }if(["general"].includes(obj["Stage"]) && ["india"].includes(obj["Country"])){
        tax=10.00
        var price=obj["Price"]
        var tax=tax*b/100
    
        obj["Tax"]=tax;
        totalPrice=price+tax
        obj["Total_price"]=totalPrice

    }else {
        var tax=15.00;
        price=obj["Price"]
        var a=price*tax/100;
        obj["Tax"]=a;
        obj["Total_price"]=price+a
    }
    knex.select("*").from("products").insert(obj).then((result)=>{
        res.send("product Inserted")
    }).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send("Their is Error")
    })
})




app.listen(8000,() =>{
    console.log("listining 8000 ")
});