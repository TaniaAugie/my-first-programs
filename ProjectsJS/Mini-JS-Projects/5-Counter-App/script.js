let count = 0;

const display = () => {
  let span = document.getElementById("output");
  span.innerHTML = count;
};

function increase() {
  count += 1;
  display();
}

function decrease() {
  count -= 1;
  display();
}

display();
