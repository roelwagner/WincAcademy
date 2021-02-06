const checkAge = num => {
    return num >= 18;
}
const greet = boolean => {
    return boolean ? "Hello there" : "Hey kiddo";
}


const getVAT = num => {
    return (100+num) / 100;
}
const getFullPrice = (basePrice, VAT) => {
    return basePrice * getVAT(VAT);
}
const seperateVAT = (fullprice, VAT) => {
    const basePrice = fullprice / getVAT(VAT);
    const addedTaxes = fullprice - basePrice;
    return [basePrice, addedTaxes]
}
