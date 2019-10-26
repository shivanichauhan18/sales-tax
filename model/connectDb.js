knex = require("./connection.js")


insertData=(data)=>{
    knex('product').insert(data)
    return { success: true, message: 'ok' }

};
  
var selectData=()=>{
    return knex.select("*")
        .from("product")
}

module.exports={insertData,selectData}