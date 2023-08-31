const clock = document.getElementById("demo");
const btn = document.getElementById("btn");

const startTimer = () => {
  if (btn.textContent === "Hide Time") {
    clock.textContent = new Date().toLocaleTimeString();
  } else {
    clock.textContent = "";
  }
};

btn.onclick = () => {
  if (!clock.textContent) {
    btn.textContent = "Hide Time";
    setInterval(startTimer, 1000);
  }

  if (clock.textContent) {
    btn.textContent = "Show Time";
    clearInterval(startTimer);
  }
};
