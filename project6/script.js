const display = document.getElementById("display");
function appendTODisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function factorial() {
  try {
    let number = parseInt(display.value);
    if (isNaN(number) || number < 0) {
      display.value = "error";
      return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    display.value = factorial;
  } catch {
    display.value = "error";
  }
}
