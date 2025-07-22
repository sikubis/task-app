let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}