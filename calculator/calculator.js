function appendToDisplay(value) {
  document.querySelector("#display").value += value;
}

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function percentage() {
  const percent = document.querySelector("#display").value;
  const result = percent / 100;
  document.querySelector("#display").value = result;
}
function squareRoot() {
  const squareRT = document.querySelector("#display").value;
  const result = Math.sqrt(squareRT);
  document.querySelector("#display").value = result;
}
function square() {
  const sq = document.querySelector("#display").value;
  const result = sq ** 2;
  document.querySelector("#display").value = result;
}

function calculate() {
  try {
    const result = eval(document.querySelector("#display").value);
    document.querySelector("#display").value = result;
  } catch (error) {
    document.querySelector("#display").value = "Error";
  }
}
