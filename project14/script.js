const left = document.querySelector(".back-btn");
const slider = document.querySelector(".slider");
const right = document.querySelector(".next-btn");
const images = document.querySelectorAll(".images");
let sliderNumber = 1;
const length = images.length;
//
const bottom = document.querySelector(".bottom");
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = " buttons";
  bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".buttons");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((buttons) => {
    buttons.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = ` translateX(-${i * 501}px)`;
    sliderNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

const changecolor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

//
let nextslide = () => {
  slider.style.transform = `translateX(${-sliderNumber * 500}px)`;
  sliderNumber++;
};
let prevslide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 500}px)`;
  sliderNumber--;
};
let firstslide = () => {
  slider.style.transform = `translateX(${0}px)`;
  sliderNumber = 1;
};
let lastslide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  sliderNumber = length;
};
right.addEventListener("click", () => {
  changecolor();
});
left.addEventListener("click", () => {
  sliderNumber > 1 ? prevslide() : lastslide();
  changecolor();
});

//

let slideInterval;

const startslideshow = () => {
  slideInterval = setInterval(() => {
    sliderNumber < length ? nextslide() : firstslide();
    changecolor();
  }, 2000);
};
startslideshow();

const stopslideInterval = () => {
  clearInterval(slideInterval);
};

slider.addEventListener("mouseover", stopslideInterval);
slider.addEventListener("mouseout", startslideshow);

right.addEventListener("mouseover", stopslideInterval);
right.addEventListener("mouseout", startslideshow);

left.addEventListener("mouseover", stopslideInterval);
left.addEventListener("mouseout", startslideshow);
//

//

// const backbtn = document.getElementById("back-btn");
// const nextbtn = document.getElementById("next-btn");
// let scrollcontainer = document.querySelector(".container");

// // scrollcontainer.addEventListener("wheel", (evt) => {
// //   evt.preventDefault();
// //   scrollcontainer.scrollleft += evt.deltaY;
// // });
// // nextbtn.addEventListener("click", () => {
// //   scrollcontainer.style.scollBehaviour = "Smooth";
// //   scrollcontainer.scrollLeft += 900;
// // });
// // backbtn.addEventListener("click", () => {
// //   scrollcontainer.style.scollBehaviour = "smooth";
// //   scrollcontainer.scrollLeft -= 900;
// // });
