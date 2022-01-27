let rectangle = document.getElementById("rect");

let angle = 10;


function rotate() {
  angle = angle + 10;
  rectangle.style.transform = 'rotate(' + angle + 'deg)';
}

let toLeft = 0;
let toTop = 0;

function changeLeft(event) {
  if (event.key == 'ArrowRight') {
    toLeft = toLeft + 10;
    rectangle.style.left = toLeft + 'px';
  } else if (event.key == 'ArrowLeft') {
    toLeft = toLeft - 10;
    rectangle.style.left = toLeft + 'px';
  } else if (event.key == 'ArrowUp') {
    toTop = toTop - 10;
    rectangle.style.top = toTop + 'px';
  } else if (event.key == 'ArrowDown') {
    toTop = toTop + 10;
    rectangle.style.top = toTop + 'px';
  } 
}

document.addEventListener('keydown', changeLeft);


let isRed = true;

function changeBackgroud() {
  isRed = !isRed;
  if (isRed) {
    rectangle.style.backgroundColor = 'red';
  } else {
    rectangle.style.backgroundColor = 'blue';
  }
}

setInterval(changeBackgroud, 500);

setInterval(rotate, 100);


