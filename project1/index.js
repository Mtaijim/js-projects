const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const labelcount = document.getElementById("labelcontainer");
let count = 0;

increasebtn.onclick = function () {
  count++;
  labelcount.textContent = count;
};
resetbtn.onclick = function () {
  count = 0;
  labelcount.textContent = count;
};
decreasebtn.onclick = function () {
  count--;
  labelcount.textContent = count;
};
