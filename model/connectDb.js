knex = require("./connection.js")


insertData=(data)=>{
    return knex('product').insert(data)
    // return { success: true, message: 'ok' }

};
  
var selectData=()=>{
    return knex.select("*")
        .from("product")
}

module.exports={insertData,selectData}