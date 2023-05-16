let customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

// console.log(Object.keys(customer));

// Modify properties with bracket notation
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.log(Object.values(customer));

// Delete properties using the delete keyword
delete customer["zipCode"];
delete customer["favoriteStore"];

console.log(Object.keys(customer));

// Add new properties using dot notation
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(Object.keys(customer));
console.log(Object.values(customer));

// Print the keys in the survey
let keys = Object.keys(customer);
console.log(keys);
