const textbox = document.getElementById("textbox");
const tousd = document.getElementById("tousd");
const toind = document.getElementById("toind");
const result = document.getElementById("result");
let temp;

function convert() {
  if (tousd.checked) {
    temp = Number(textbox.value);
    temp = temp / 87;
    temp = result.textContent = `${temp} usd$ `;
  } else if (toind.checked) {
    temp = Number(textbox.value);
    temp = temp * 87;
    temp = result.textContent = ` ${temp}  INR  `;
  } else {
    result.textContent = "select option";
  }
}
