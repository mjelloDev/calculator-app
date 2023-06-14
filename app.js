let firstValue = "";
let secondValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function () {
  let previousText = document.querySelector(".previous");
  let currentText = document.querySelector(".current");
  let clear = document.querySelector(".clear-all");
  let numbers = document.querySelectorAll(".numeric");
  let operators = document.querySelectorAll(".operator");

  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      numericHandler(number.textContent);
      currentText.textContent = firstValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function () {
      operatorHandler(op.textContent);
      previousText.textContent = `${secondValue} ${operator}`;
      currentText.textContent = firstValue;
    })
  );

  clear.addEventListener("click", function () {
    firstValue = "";
    secondValue = "";
    operator = "";
    previousText.textContent = firstValue;
    currentText.textContent = firstValue;
  });

  let equal = document.querySelector("#equals");
  equal.addEventListener("click", () => {
    calculate();
  });

  let backspace = document.querySelector(".backspace");
  backspace.addEventListener("click", function () {
    backspaceHandler();
    currentText.textContent = firstValue;
  });

  function backspaceHandler() {
    firstValue = firstValue.slice(0, -1);
  }

  function calculate() {
    const num1 = parseFloat(secondValue);
    const num2 = parseFloat(firstValue);

    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input";
    }

    const result = calculateOperation(operator, num1, num2);

    firstValue = result.toString();
    secondValue = "";
    operator = "";

    previousText.textContent = "";
    currentText.textContent = result.toString();
  }

  function numericHandler(num) {
    if (num === "." && firstValue.includes(".")) {
      return; // Do nothing if a decimal point already exists
    }
    firstValue += num;
  }

  function operatorHandler(op) {
    if (secondValue && operator) {
      calculate();
    }
    operator = op;
    secondValue = firstValue;
    firstValue = "";
  }

  function calculateOperation(operator, num1, num2) {
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
});

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
  if (b === 0) {
    return "C'mon Man";
  }

  return a / b;
}
