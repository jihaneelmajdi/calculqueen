let stockInput = "";
let operation = null;
let previousInput = "";

function updateDisplay() {
  document.getElementById("result").value = stockInput;
}
function appendNumber(number) {
  stockInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (stockInput === "") return;
  previousInput = stockInput;
  operation = op;
  stockInput = "";
}
function calculateResult() {
  let stockResult;
  const firstNumber = parseFloat(previousInput);
  const secondNumber = parseFloat(stockInput);

  if (isNaN(firstNumber) || isNaN(secondNumber)) return;

  switch (operation) {
    case "+":
      stockResult = firstNumber + secondNumber;
      break;

    case "-":
      stockResult = firstNumber - secondNumber;
      break;

    case "*":
      stockResult = firstNumber * secondNumber;
      break;
    case "/":
      stockResult = firstNumber / secondNumber;
      break;
    default:
      return;
  }
  stockInput = stockResult;
  operation = null;
  previousInput = "";
  updateDisplay();
}
function clearResult() {
  stockInput = "";
  previousInput = "";
  operation = null;
  updateDisplay();
}
