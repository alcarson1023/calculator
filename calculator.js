// Button linking
const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const subtract = document.querySelector("#subtract");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const add = document.querySelector("#add");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const equal = document.querySelector("#equal");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");

// Variable listing
let input1 = [];
let input2 = [];
let operator = "";
let screen = input1 + operator + input2;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.id;
    // stringToNum(["1", "1", "2", ".", "5"]);
    handleClick(userChoice);
  });
});

// Convert an array of string digits to a single actual number.
function stringToNum(arr) {
  let runningNum = "";
  for (let i = 0; i < arr.length; i++) {
    runningNum += arr[i];
  }
  endNum = parseFloat(runningNum);
  return endNum;
}

function clearTheBoard() {
  input1 = [];
  input2 = [];
  operator = "";
  display.textContent = "";
}

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
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += 1;
        display.textContent = input1 + operator + input2;
        break;
      }
    case "two":
      if (operator === "") {
        input1 += 2;
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += 2;
        display.textContent = input1 + operator + input2;
        break;
      }
    case "three":
      if (operator === "") {
        input1 += "3";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "3";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "four":
      if (operator === "") {
        input1 += "4";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "4";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "five":
      if (operator === "") {
        input1 += "5";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "5";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "six":
      if (operator === "") {
        input1 += "6";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "6";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "seven":
      if (operator === "") {
        input1 += "7";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "7";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "eight":
      if (operator === "") {
        input1 += "8";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "8";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "nine":
      if (operator === "") {
        input1 += "9";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "9";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "zero":
      if (operator === "") {
        input1 += "0";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += "0";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "decimal":
      if (operator === "") {
        input1 += ".";
        display.textContent = input1 + operator + input2;
        break;
      } else {
        input2 += ".";
        display.textContent = input1 + operator + input2;
        break;
      }
    case "clear":
      clearTheBoard();
      break;
    case "equal":
      if (input1 === []) {
        alert("We got this far!");
        input1 = 0;
      }
      letsMath();
      break;
    default:
      console.log("Something went wrong...");
  }
}

// Accept user input, convert to single number, add to finalArr[0]

// Accept user operator, add to finalArr[1]

// Accept user input, convert to single number, add to finalArr[2]

// If statement based on finalArr[1], performs operator on finalArr[0] & finalArr[2]

// Gray out other operator buttons once on is clicked, reset when cleared.

// Set the current operation to a variable, then just use that variable when the equals sign is hit! This also allows you to switch operations, so it doesn't need to be locked.
