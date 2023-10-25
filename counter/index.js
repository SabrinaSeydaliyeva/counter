let p = document.querySelector("p");
let decreaseBtn = document.querySelector(".decrease-btn");
let resetBtn = document.querySelector(".reset-btn");
let increaseBtn = document.querySelector(".increase-btn");

decreaseBtn.addEventListener("click", decreaseFunc);

function decreaseFunc() {
  p.innerText--;

  if (p.innerText < 0) {
    p.style.color = "red";
  } else {
    p.style.color = "black";
  }
}

decreaseFunc();

increaseBtn.addEventListener("click", increaseFunc);

function increaseFunc() {
  p.innerText++;
  if (p.innerText > 0) {
    p.style.color = "black";
  } else {
    p.style.color = "red";
  }
}
increaseFunc();

resetBtn.addEventListener("click", resetFunc);

function resetFunc() {
  p.innerText = 0;
}

resetFunc();
