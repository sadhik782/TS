let accountHolderInfo: any = {
  accountNo: 1002,
  accHolderName: "sadhik",
  typeofAcc: "elite",
  IsActive: true,
};
let customerDetails: any = [
  {
    accountNo: 1002,
    accHolderName: "sadhik",
    typeofAcc: "elite",
    IsActive: true,
  },
  {
    accountNo: 1003,
    accHolderName: "Yashwanth",
    typeofAcc: "SB",
    IsActive: true,
  },
];
let accountHolderName: any = "sadhik";
let customerData: any = {
  accountNo: 1003,
  accHolderName: "Yashwanth",
  typeofAcc: "SB",
  IsActive: true,
  address: { state: "TamilNade", city: "Chennai" }, //nested object
};
console.log(customerData)

type customerType ={[key:string]:string|boolean|number}


let customer1: customerType = {
  accountNo: 1003,
  accHolderName: "Yashwanth",
  typeofAcc: "SB",
  IsActive: true
};
let customer2: customerType = {
  accountNo: 1004,
  accHolderName: "Sadhik",
  typeofAcc: "Elite",
  IsActive: true,
};


console.log(customer1)
console.log(customer2)

type customerDataType = {
  accountNo: number;
  accHolderName: string;
  typeofAcc: string;
  IsActive: boolean;
};


let customer3: customerDataType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  //address: "chennai", //restricted
};


