/* define your functions here */
function calculateTotal(quantity,price){ 
    return quantity * price;
}

function calculateSubtotal(cart){
    let subTotal = 0;
    for(const item of cart){
        const productPrice = item.product.price;
        const quantity = item.quantity;
        const itemSubtotal = productPrice * quantity;
        subTotal = subTotal + itemSubtotal;
    }
    return subTotal;
}

function calculateShipping(shipping_threshold){
    const subtotal = calculateSubtotal(cart)
    if(subtotal < shipping_threshold ){
        return 40;
    }
    else{
        return 0;
    }
}

function calculateTax(tax_rate){
    const subtotal = calculateSubtotal(cart)
    return subtotal * tax_rate;
}

function calculateGrandTotal(){
    const subtotal = calculateSubtotal(cart);
    const shippingAmount = calculateShipping(shipping_threshold);
    const taxAmount = calculateTax(tax_rate);
    return subtotal + shippingAmount + taxAmount;
}






        
