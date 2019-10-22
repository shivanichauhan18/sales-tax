function getTax(price,tax){
    return price*tax/100
}



let salesTax = (product)=>{
    categoreis=["book","food","medicine"]
    var tax=0.0
    if(product.imported){
        tax=tax+getTax(product["Price"],5)

    }if(!categoreis.includes(product["category"])){
        tax=tax+getTax(product["Price"],10)
    }

    product["Tax"]=tax
    typeCast=(product.imported).toString()

    product["imported"]=typeCast
    product["TotalPrice"]=product["Price"]+tax
    return product;
}
module.exports=salesTax