function getTax(price,tax){
    return price*tax/100
}


let salesTax = (product)=>{
    categories=["book","food","medicine"]
    var tax=0.0
    if(product.imported){
        tax=tax+getTax(product["quantityPrice"],5)

    }if(!categories.includes(product["category"])){
        tax=tax+getTax(product["quantityPrice"],10)
    }

    product["Tax"]=tax
    product["priceWithTax"]=product["quantityPrice"]+tax
    return product;
}
module.exports=salesTax

