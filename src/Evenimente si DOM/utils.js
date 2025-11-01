const TAX_RATE = 0.19; 

function calcPriceWithTax(price) { 
    return price + price * TAX_RATE;
}

export { TAX_RATE, calcPriceWithTax };
