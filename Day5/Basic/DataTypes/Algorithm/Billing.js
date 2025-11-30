function calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee) {
    // Step 1: Calculate discount
    var discountAmount = (basePrice * discountPercent) / 100;
    var priceAfterDiscount = basePrice - discountAmount;
    // Step 2: Calculate tax
    var taxAmount = (priceAfterDiscount * taxPercent) / 100;
    var priceAfterTax = priceAfterDiscount + taxAmount;
    // Step 3: Add shipping fee
    var finalPrice = priceAfterTax + shippingFee;
    return parseFloat(finalPrice.toFixed(2)); // round to 2 decimals
}
// Example usage
var basePrice = 1000;
var discountPercent = 10; // 10% discount
var taxPercent = 18; // 18% GST
var shippingFee = 50;
console.log("Final Price:", calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee));
