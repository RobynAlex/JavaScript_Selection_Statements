console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let numToGuess = 8;

let userNum = prompt("Guess a number between 1 through 10");

if (numToGuess < userNum) {
    alert("Way too high.")
} else if (numToGuess > userNum){
    alert("Too low.")
} else {
    alert("Congratulations! 8 is the number.")
}
// Exercise 2

let userColor = prompt(
    "What is your favorite color?\nPrimary Colors only Ex. Colors you see on a rainbow"
);


switch (userColor) {
    case "Red":
    case "red":
    case "Orange":
    case "orange":
    case "Yellow":
    case "yellow":
        alert("This is a warm color. Cool!");
        break;
    case "Green":
    case "green":
    case "Blue":
    case "blue":
    case "Purple":
    case "purple":
        alert("That's a cool color. That's hot!");
        break;
}