knex = require("./connection.js")


insertData=()=>{
    knex('productBill').insert(product)
        .then((result)=>{
            return res.json({ success: true, message: 'ok' });
        }).catch((err)=>{
            res.send(err)
        });
}