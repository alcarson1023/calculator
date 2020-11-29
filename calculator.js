// Button linking
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const buttons = document.querySelectorAll(".button");
const decimal = document.querySelector("#decimal");
const message = document.querySelector("#message");
const divide = document.querySelector("#divide");
const three = document.querySelector("#three");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const zero = document.querySelector("#zero");
const six = document.querySelector("#six");
const add = document.querySelector("#add");
const one = document.querySelector("#one");
const two = document.querySelector("#two");

// Variable listing
let input1 = [];
let input2 = [];
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleClick(button.id);
  });
});

// Convert an array of string digits to a single actual number by adding each array item to a string, then converting that string.
function stringToNum(arr) {
  let runningNum = "";
  for (let i = 0; i < arr.length; i++) {
    runningNum += arr[i];
  }
  return parseFloat(runningNum);
}

// Reset everything back to its original state
function clearTheBoard() {
  input1 = [];
  input2 = [];
  operator = "";
  display.textContent = "";
}

// set input1 to the result of our operation, then display input1.
function letsMath() {
  let num1 = stringToNum(input1);
  let num2 = stringToNum(input2);
  if (operator === "+") {
    clearTheBoard();
    input1 = (num1 + num2).toFixed(2);
    display.textContent = input1;
  } else if (operator === "-") {
    clearTheBoard();
    input1 = (num1 - num2).toFixed(2);
    display.textContent = input1;
  } else if (operator === "x") {
    clearTheBoard();
    input1 = (num1 * num2).toFixed(2);
    display.textContent = input1;
  } else if (operator === "/") {
    clearTheBoard();
    input1 = (num1 / num2).toFixed(2);
    display.textContent = input1;
  } else {
    alert("Something unexpected happened!");
  }
}

// If an operator is selected, set that as the current one.
// If a number is selected and no operator has been chosen, add digit to the first num. If one has been chosen, add digit to the second num.
function handleClick(userChoice) {
  switch (userChoice) {
    case "add":
      operator = "+";
      display.textContent = input1 + operator + input2;
      break;
    case "subtract":
      operator = "-";
      display.textContent = input1 + operator + input2;
      break;
    case "multiply":
      operator = "x";
      display.textContent = input1 + operator + input2;
      break;
    case "divide":
      operator = "/";
      display.textContent = input1 + operator + input2;
      break;
    case "one":
      if (operator === "") {
        input1 += 1;
        break;
      } else {
        input2 += 1;
        break;
      }
    case "two":
      if (operator === "") {
        input1 += 2;
        break;
      } else {
        input2 += 2;
        break;
      }
    case "three":
      if (operator === "") {
        input1 += "3";
        break;
      } else {
        input2 += "3";
        break;
      }
    case "four":
      if (operator === "") {
        input1 += "4";
        break;
      } else {
        input2 += "4";
        break;
      }
    case "five":
      if (operator === "") {
        input1 += "5";
        break;
      } else {
        input2 += "5";
        break;
      }
    case "six":
      if (operator === "") {
        input1 += "6";
        break;
      } else {
        input2 += "6";
        break;
      }
    case "seven":
      if (operator === "") {
        input1 += "7";
        break;
      } else {
        input2 += "7";
        break;
      }
    case "eight":
      if (operator === "") {
        input1 += "8";
        break;
      } else {
        input2 += "8";
        break;
      }
    case "nine":
      if (operator === "") {
        input1 += "9";
        break;
      } else {
        input2 += "9";
        break;
      }
    case "zero":
      if (operator === "") {
        input1 += "0";
        break;
      } else {
        input2 += "0";
        break;
      }
    case "decimal":
      if (operator === "" && input1.includes(".")) {
        input1 += ".";
        break;
      } else {
        input2 += ".";
        break;
      }
    case "clear":
      clearTheBoard();
      break;
    case "equal":
      console.log(input1);
      if (input1.length == 0) {
        message.textContent = "Please enter your first number!"; // Problem -  Why is this not appearing? Console.log of input1 shows []
        input1 = 0;
      } else if (input2.length == 0) {
        message.textContent = "Please enter your first number!";
        input2 = 0;
      }
      letsMath();
      break;
    default:
      console.log("Something went wrong...");
  }
  display.textContent = input1 + operator + input2;
}
