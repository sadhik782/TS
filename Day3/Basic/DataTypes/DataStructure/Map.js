"use strict";
let productStock = new Map();
productStock.set("Laptop", 10);
productStock.set("Phone", 20);
productStock.set("Tablet", 5);
console.log(`Stock for Phone: ${productStock.get("Phone")}`);
function purchaseProduct(product, quantity) {
    if (productStock.has(product)) { //check if that key is present in the object
        let currentStock = productStock.get(product); //get the value for the particular key
        if (currentStock >= quantity) {
            productStock.set(product, currentStock - quantity);
            console.log(`✅ Purchased ${quantity} ${product}(s). Remaining stock: ${productStock.get(product)}`);
        }
        else {
            console.log(`❌ Not enough stock for ${product}. Only ${currentStock} left.`);
        }
    }
    else {
        console.log(`❌ Product ${product} not found.`);
    }
}
purchaseProduct("Phone", 2);
purchaseProduct("Tablet", 6);
if (productStock.get("Tablet") === 0) {
    productStock.delete("Tablet");
}
