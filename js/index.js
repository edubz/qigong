//right arrow
const right = document.getElementById("right");
//left arrow
const left = document.getElementById("left");

//radio buttons
const page = document.getElementsByClassName("page");

//placemarker
let i = 1;

page[i].style.display = "flex";

right.onclick = () => {
  anime({
    targets: ".right-trigger",
    keyframes: [{ scale: 1.15 }, { scale: 1 }],
    easing: "easeOutElastic(1, .8)",
    duration: 250
  });
  //increment placemarker

  i++;

  page[i - 1].style.display = "none";
  if (i > page.length - 1) {
    i = 0;
  }
  page[i].style.opacity = 0;
  page[i].style.display = "flex";
  page[i].scrollTo(0, 0);
  setTimeout(function () {
    page[i].style.opacity = "1";
  }, 100);
};

left.onclick = () => {
  anime({
    targets: ".left-trigger",
    keyframes: [{ scale: 1.15 }, { scale: 1 }],
    easing: "easeOutElastic(1, .8)",
    duration: 250
  });
  i--;

  page[i + 1].style.display = "none";
  if (i < 0) {
    i = page.length - 1;
  }
  page[i].style.opacity = 0;
  page[i].style.display = "flex";
  page[i].scrollTo(0, 0);
  setTimeout(function () {
    page[i].style.opacity = "1";
  }, 100);
};
