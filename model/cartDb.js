knex = require("./connection.js")


var selectData=(name)=>{
    return knex.select("*")
        .from("product").where("Product",name)
}

var insertion=(data,q,id)=>{
    data["No"]=id
    data["q"]=q
    price=data["Price"]*q
    data["quantityPrice"]=price
    return knex("cart").insert(data)
}

var getData=(()=>{
    return knex.select("*").from("cart")
});

module.exports={selectData,insertion,getData}