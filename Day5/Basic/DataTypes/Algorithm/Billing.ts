function calculateFinalPrice(
  basePrice: number,
  discountPercent: number,
  taxPercent: number,
  shippingFee: number
): number {
  // Step 1: Calculate discount
  const discountAmount = (basePrice * discountPercent) / 100;
  const priceAfterDiscount = basePrice - discountAmount;

  // Step 2: Calculate tax
  const taxAmount = (priceAfterDiscount * taxPercent) / 100;
  const priceAfterTax = priceAfterDiscount + taxAmount;

  // Step 3: Add shipping fee
  const finalPrice = priceAfterTax + shippingFee;

  return parseFloat(finalPrice.toFixed(2)); // round to 2 decimals
}

// Example usage
const basePrice = 1000;
const discountPercent = 10; // 10% discount
const taxPercent = 18; // 18% GST
const shippingFee = 50;

console.log(
  "Final Price:",
  calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee)
);
