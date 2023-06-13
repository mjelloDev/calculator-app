function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultText = document.querySelector(".result");

const numeric = document.querySelectorAll(".numeric");
numeric.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      // If no operator is selected yet, update the firstNumber
      firstNumber += button.value;
    } else {
      // If an operator is already selected, update the secondNumber
      secondNumber += button.value;
    }
    resultText.textContent += button.value;
  });
});

const opSymbol = document.querySelectorAll(".operator");
opSymbol.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber !== "") {
      // Only update the operator if a firstNumber is already entered
      operator = button.value;
      resultText.textContent += ` ${button.value} `;
    }
  });
});

const clearAll = document.querySelector("#clear-all");
clearAll.addEventListener("click", clearCalculator);

function clearCalculator() {
  resultText.textContent = " ";
}

const equalSign = document.querySelectorAll(".equal-sign");
equalSign.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
      const num1Value = parseFloat(firstNumber);
      const num2Value = parseFloat(secondNumber);
      const result = operate(operator, num1Value, num2Value);
      resultText.textContent = result;

      // Reset the variables for the next calculation
      firstNumber = result.toString();
      operator = "";
      secondNumber = "";
    }
  });
});

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}

// TODO:
// fix clicking equal sign = before any input
// display and store every number input before doing operate
// display error when dividing with zero
