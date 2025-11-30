function displayFullName(firstname) {
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    console.log(firstname + otherNames.join(" "));
}
displayFullName("sadhik", "Nitturu", "chennai");
displayFullName("sadhik", "Nitturu");
displayFullName("sadhik");
displayFullName("sadhik", "Nitturu", "sarathy", "chennai");
function calculateTotalPrice() {
    //logic
    //return total amount to be paid
    var charges = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        charges[_i] = arguments[_i];
    }
}
calculateTotalPrice(20, 30, 40);
calculateTotalPrice(30, 90, 80, 90);
var pd1 = { productName: "Kettle", productPrice: 5000 };
var pd2 = { productName: "Window screen", productPrice: 300 };
var pd3 = { productName: "Biscuits", productPrice: 100 };
function addProductPrice() {
    var pdt = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pdt[_i] = arguments[_i];
    }
    var totalPrice = 0;
    pdt.map(function (p) { return (totalPrice += p.productPrice); });
    return totalPrice;
}
console.log(addProductPrice(pd1, pd2));
