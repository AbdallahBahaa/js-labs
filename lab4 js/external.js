let previous_btn = document.getElementById("previous_btn");
let next_btn = document.getElementById("next_btn");
let slide_btn = document.getElementById("slide_btn");
let stop_btn = document.getElementById("stop_btn");
let img = document.getElementById("slide_img");

let x = 1;
let timer = null;

function updateImage() {
  img.src = `images/${x}.png`;
}

function nextImage() {
  x++;
  if (x > 3) x = 1;
  updateImage();
}

function previousImage() {
  x--;
  if (x < 1) x = 3;
  updateImage();
}

previous_btn.onclick = previousImage;
next_btn.onclick = nextImage;

slide_btn.onclick = () => {
  if (!timer) {
    timer = setInterval(nextImage, 1500);
  }
};

stop_btn.onclick = () => {
  clearInterval(timer);
  timer = null;
};
