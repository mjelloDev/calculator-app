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

const numeric = document.querySelectorAll(".numeric");
const opsymbol = document.querySelectorAll(".operator");
const equalsign = document.querySelectorAll(".equal-sign");
const calcbody = document.querySelectorAll(".calculator-body");
let resultText = document.querySelector(".result");
const num1 = 0;
const operator = "+";
const num2 = 0;

equalsign.forEach((button) => {
  button.addEventListener("click", () => {
    // TODO CONNECT FUNCTION TO GET NUMBERS

    const result = operate(operator, num1Value, num2Value);
    resultText.textContent = result;
  });
});
