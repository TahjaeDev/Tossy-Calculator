let expression = "";

function append(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    alert("Invalid expression");
  }
}
