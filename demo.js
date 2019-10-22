var express = require('express');
var app = express();

app.use(express.json());

router=express.Router()

router.post("/add",(req,res)=>{
    const product={
        "name":req.body.name,
        "lastname":req.body.lastname
    }
});

module.exports=router