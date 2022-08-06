// Celsius to Fahrenheit conversion

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(
  celsius + " degrees Celsius is " + fahrenheit + " degrees Fahrenheit"
);

// Check if you have enough money
let cash = 45;
let price = 40;
let difference = cash - price;
if (cash > price) {
  console.log(`You paid extra money - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("You have exactly enough money");
} else {
  console.log(
    `You don't have enough money - you need ${difference * -1} more dollars`
  );
}
