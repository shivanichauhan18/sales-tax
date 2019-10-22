knex = require("./connection.js")


insertData=(data)=>{
    knex('product').insert(data)
        .then((result)=>{
            return result
        }).catch((err)=>{
            res.send(err)
        });
}

module.exports=insertData




insertDataWithExists=(products)=>{
    return knex("product").select()
    .where("Product",products.Product).then((products)=>{
        if (products === 0){
        return knex("product").insert(products)
        }else{
            return "products already exists"
        }
    }).catch((err)=>{})
    
}

// module.exports=insertDataWithExists




var val = "water";
return knex('ingredients').select()
        .where('name', val)
    .then(function(rows) {
        if (rows.length===0) {
            // no matching records found
            return knex('ingredients').insert({'name': val})
        } else {
            // return or throw - duplicate name found
        }
    })
    .catch(function(ex) {
        // you can find errors here.
    })

    // knex.select("Product")
    // .from("product")

    // .where("Product"=products.Product)
    // .then(()=>{
    //     // knex("product").insert(products).then((result)=>{
    //     //     a={ success: true, message: 'ok' }
    //     //     return a
    //     return "product already exists"
    //     })
    //     .catch((products)=>{
    //         return products
    //     });