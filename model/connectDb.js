knex = require("./connection.js")


insertData=(data)=>{
    knex('product').insert(data)
    return { success: true, message: 'ok' }

};
  



var selectData=(product)=>{
    return knex.select("*")
        .from("product").where("Product",product)
}

module.exports={insertData,selectData}