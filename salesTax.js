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


app.get("/get-product/:Product",function(req,res){
    knex.select("Product","Price","Tax","Total_price").from("products").then((result)=>{
        tax_list=[]
        price_list=[]
        total_list=[]
        product=[]
        var total_bill=0
        for (i of result){
            product.push(i["Product"])
            tax_list.push(i["Tax"])
            price_list.push(i["Price"])
            // total_list.push(i["Total_price"])
            total_bill=total_bill+i["Total_price"]

        }
        list=[]
        data={}

        for (var i=0; (i<tax_list.length); i++){
            if(product[i] === req.params.Product){
                data.product=product[i]
                data.price=price_list[i]
                data.tax=tax_list[i]
                data.total_price=total_list[i]
                // count=count+total_list[i]
                list.push(data)

            }
        }data.grand_total=total_bill
        list.push(data)
        res.send(list)
        

    }).catch((err)=>{
        res.send("their is something wrong")
    })
})


app.listen(8000,() =>{
    console.log("listining 8000 ")
});