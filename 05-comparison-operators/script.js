// Comparison Operators in JavaScript
console.log("=== Comparison Operators in JavaScript ===\n");

let num1 = 10;
let num2 = "10";
let num3 = 5;

// 1. Equal (==) -> Compares values (type conversion happens)
console.log("1. Equal (==)");
console.log(num1 == num2); // true (string "10" is converted to number 10)
console.log(num1 == num3); // false (10 is not equal to 5)
console.log("\n");

// 2. Strict Equal (===) -> Compares values and types (no conversion)
console.log("2. Strict Equal (===)");
console.log(num1 === num2); // false (number 10 is not strictly equal to string "10")
console.log(num1 === 10); // true (same value and type)
console.log("\n");

// 3. Not Equal (!=) -> Checks if values are different (type conversion happens)
console.log("3. Not Equal (!=)");
console.log(num1 != num2); // false (because "10" converts to 10)
console.log(num1 != num3); // true (10 is not equal to 5)
console.log("\n");

// 4. Strict Not Equal (!==) -> Checks if values and types are different
console.log("4. Strict Not Equal (!==)");
console.log(num1 !== num2); // true (because one is number, the other is string)
console.log(num1 !== 10); // false (same type and value)
console.log("\n");

// 5. Greater Than (>)
console.log("5. Greater Than (>)");
console.log(num1 > num3); // true (10 is greater than 5)
console.log(num3 > num1); // false (5 is not greater than 10)
console.log("\n");

// 6. Less Than (<)
console.log("6. Less Than (<)");
console.log(num3 < num1); // true (5 is less than 10)
console.log(num1 < 5); // false (10 is not less than 5)
console.log("\n");

// 7. Greater Than or Equal (>=)
console.log("7. Greater Than or Equal (>=)");
console.log(num1 >= 10); // true (10 is equal to 10)
console.log(num3 >= 10); // false (5 is not greater than or equal to 10)
console.log("\n");

// 8. Less Than or Equal (<=)
console.log("8. Less Than or Equal (<=)");
console.log(num1 <= 10); // true (10 is equal to 10)
console.log(num3 <= 2); // false (5 is not less than or equal to 2)
console.log("\n");

console.log("=== End of Comparison Operator Examples ===");

// Challenges

//find the the the custome can afford items or not if yes then update the balance agter buy the items

let balance = 100;
let itemPrice = 10;

if (balance >= itemPrice) {
  console.log("You can buy the items");
  console.log("Now you balance is: ", balance);
  let afterBuyedItems = balance - itemPrice;
  console.log("After Purchase the items you balance is: ", afterBuyedItems);
} else {
  console.log("You do not have enought balance to  buy the item");
}
