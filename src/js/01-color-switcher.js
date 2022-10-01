
const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;

startBtn.addEventListener("click", (evt) => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        evt.target.disabled = true;
    console.log(`random color  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
  console.log(`Interval with id ${timerId} has stopped!`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}