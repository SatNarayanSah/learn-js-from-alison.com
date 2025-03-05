function sendMessage() {
  console.log("Help!");
}
let i = 0;
while (i < 1000) {
//   sendMessage();
  i++;
}


// Continue

let fuel = 1000;
let distance = 0;
console.log(fuel, distance)
while (fuel > 0){
    distance++;
    fuel--;
    if(fuel <= 0){
        console.log('Fuel is over and you have cross the distance:', distance)
        break;
    }
};

console.log(fuel, distance)

