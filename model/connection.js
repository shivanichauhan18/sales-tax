var knex=require("knex")({
    client:"mysql",
    connection:{
        host     : '127.0.0.1',
        user: 'root',
        database: 'salesTax',
        password: 'shivani123'
    }
})


module.exports=knex