var accountNumber = 8900876;
console.log(accountNumber);
var accountHolderName = "sadhik";
var isAccountActive = true;
//let transactionID: bigint = 9876543210123456789n;
var balance = 20000;
function makeTransaction(amount) {
    if (balance < amount) {
        return "Insufficient balance";
    }
    else
        balance = balance - amount;
    return balance;
}
console.log(makeTransaction(21000));
