// Access the Display Element
const display = document.getElementById("display");

// Append Function
function append(value) {
 display.value = display.value + value;
}

// Clear Function
function clearDisplay() {
  display.value = "";
}
//  Backspace Function
function backspace() {
  display.value = display.value.slice(0, -1);
}

//  Calculate Function

// Get the input expression
function calculate() {
  const expr = display.value;
  let operator = null;

  // Check which operator is used:
  if (expr.includes("+")) operator = "+";
  else if (expr.includes("-")) operator = "-";
  else if (expr.includes("*")) operator = "*";
  else if (expr.includes("/")) operator = "/";
  else if (expr.includes("%")) operator = "%";

  // If No Operator Found
  if (!operator) {
    display.value = "No operator";
    return;
  }

  // Splits the input into 2 parts.
  const parts = expr.split(operator);

  //  Validate Input
  if (parts.length !== 2) {
    display.value = "Invalid input";
    return;
  }

  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[1]);

  if (isNaN(num1) || isNaN(num2)) {
    display.value = "Invalid numbers";
    return;
  }

  // Based on the operator, it performs the correct operations.
  let result;

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;

  // Prevents dividing by zero which would crash or return Infinity.
  else if (operator === "/") {
    if (num2 === 0) {
      result = "Cannot divide by 0";
    } else {
      result = num1 / num2;
    }
  } else if (operator === "%") result = num1 % num2;

  display.value = result;
}
