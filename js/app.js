const clock = document.getElementById("demo");
const btn = document.getElementById("btn");
let clockId = null;

const displayClock = () => {
  clock.textContent = new Date().toLocaleTimeString();
};

btn.onclick = () => {
  if (!clockId) {
    btn.textContent = "Hide Time";
    clockId = setInterval(displayClock, 1000);
    displayClock();
  } else {
    clearInterval(clockId);
    btn.textContent = "Show Time";
    clock.textContent = "";
    clockId = null;
  }
};
