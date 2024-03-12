const body = document.body;

function setColor(color) {
  body.style.backgroundColor = color;
}

function rand() {
  const rand = Math.floor(Math.random() * 16);
  return rand;
}

//RGB

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}
