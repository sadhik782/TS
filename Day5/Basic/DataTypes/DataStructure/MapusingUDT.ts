// Class to store product details
class Product {
  constructor(public productname: string, public qty: number) {}
}

// Create product objects
let p1 = new Product("iphone", 10);
let p2 = new Product("headset", 20);

// Map<string, Product>  → productId → product object
let productStock = new Map<string, Product>();

// Adding products with IDs
productStock.set("p001", p1);
productStock.set("p002", p2);

// Check stock for a product using productId
function checkStock(productId: string): void {
  if (productStock.has(productId)) {
    const p = productStock.get(productId)!;
    console.log(`Stock for ${p.productname}: ${p.qty}`);
  } else {
    console.log(`❌ Product ID ${productId} not found.`);
  }
}

// Purchase function
function purchaseProduct(productId: string, quantity: number): void {
  if (productStock.has(productId)) {
    let product = productStock.get(productId)!;

    if (product.qty >= quantity) {
      product.qty -= quantity; // reduce stock

      console.log(
        `✅ Purchased ${quantity} ${product.productname}(s). Remaining stock: ${product.qty}`
      );

      // Remove product if out of stock
      if (product.qty === 0) {
        productStock.delete(productId);
        console.log(`⚠️ ${product.productname} is out of stock and removed.`);
      }
    } else {
      console.log(
        `❌ Not enough stock for ${product.productname}. Only ${product.qty} left.`
      );
    }
  } else {
    console.log(`❌ Product ID ${productId} does not exist.`);
  }
}

// TESTING
checkStock("p001"); // Stock for iphone: 10

purchaseProduct("p001", 2);  
// Purchased 2 iphone(s). Remaining stock: 8

purchaseProduct("p001", 20);
// Not enough stock

purchaseProduct("p002", 20);
// Purchased 20 headset(s). Remaining stock: 0
// Product removed

checkStock("p002");
// Product not found
