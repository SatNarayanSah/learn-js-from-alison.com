// make a functin to calculate hours to minutes
function hoursToMintes(hours) {
  let result = hours * 60;
  return result;
}
let minutes = hoursToMintes(1);
console.log(minutes);

// now make a function that find thours i days

function dayTOHours(day) {
  let result = day * 24;
  return result;
}
let day = dayTOHours(2);
console.log(day);

// challenges

let balance = 100;
let stoke = 50;
let price = 5;
let quantity = 8;
// 1. Check if we have stoke
// 2. Reduce stoke, increase balance

if (quantity <= stoke) {
  stoke -= quantity;
  balance += price * quantity;
  console.log("Purchase Complete...", stoke, balance)
} else{
    console.log("Purchase InCompleter due to in sufficient quantity")
}
