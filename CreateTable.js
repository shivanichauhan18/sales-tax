const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'shivani123',
        database: 'salesTax'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('products', (table) => {
    table.increments('No')
    table.string('Product')
    table.string('Country')
    table.string('Stage')
    table.float('Price')
    table.float('Tax')
    table.float('Total_price')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });


app.get("/get_price",function(req,res){
    for (var i=1; (i<14); i++){
        knex.select("Total_price").from("products").where("No",i).then((result)=>{
            data=JSON.stringify(result);
            var count=0.0
            console.log(data);
            var count=data[i]["Total_price"]+count
            return count
        
        
    
    }).then((responce)=>{
            res.send(responce)
        })
    }
})

// grand total is 400.12

// Promise.all(rows.map(row => {
//     return knex('table')
//         .select('*').where('row_id', row.id)
//         .then(table => {
//             row.table = table;
//             return row;
//         });
// })).then(response => {
//     res.send(response);
// });

app.get("/get",function(req,res){
    Promise.all(rows.map(row =>{
        return knex("products")
        .select("Total_price").where('No',row.No)
        .then((table)=>{
            row.table=table
            return row;
        })
    }))
    .then((data)=>{
        res.send(data)
    })
})
