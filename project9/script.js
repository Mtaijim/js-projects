const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;
document.addEventListener("DOMContentLoaded", intializeslider);
function intializeslider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displayslide");
    intervalid = setInterval(nextslide, 5000);
  }
}
function showslide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displayslide");
  });
  slides[slideIndex].classList.add("displayslide");
}
function prevslide() {
  clearInterval(intervalid);
  slideIndex--;
  showslide(slideIndex);
}
function nextslide() {
  slideIndex++;
  showslide(slideIndex);
}
