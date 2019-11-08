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

var getData=((id)=>{
    return knex.select("*").from("cart")
});

var selectProduct=(id)=>{
    return knex.select("*").from("cart").where("No",id)
}

var productByOrder=(()=>{
    return knex.from('cart').select('Price').orderBy('Price', 'asc')

})

module.exports={selectData,insertion,getData,selectProduct,productByOrder}