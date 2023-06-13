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

const equalSign = document.querySelectorAll(".equal-sign");
const calcbody = document.querySelectorAll(".calculator-body");
let resultText = document.querySelector(".result");

const num1 = 0;
const operator = "+";
const num2 = 0;

const numeric = document.querySelectorAll(".numeric");
numeric.forEach((button) => {
  button.addEventListener("click", () => {
    resultText.textContent += button.value;
  });
});

const opSymbol = document.querySelectorAll(".operator");
opSymbol.forEach((button) => {
  button.addEventListener("click", () => {
    resultText.textContent += ` ${button.value} `;
  });
});

const clearAll = document.querySelector("#clear-all");
clearAll.addEventListener("click", clearCalculator);

function clearCalculator() {
  resultText.textContent = " ";
}

equalSign.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the values of num1, operator, and num2 from the resultText element
    const [num1, operator, num2] = resultText.textContent.split(" ");

    // Convert num1 and num2 to numbers
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    const result = operate(operator, num1Value, num2Value);
    resultText.textContent = result;
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
