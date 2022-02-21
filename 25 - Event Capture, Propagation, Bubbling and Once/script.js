const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); //stop running on all of the elements
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    // capture: true, //run on the capture down instead of bubble up
    // once: true, //unbinds the event listener after first time
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("click");
  },
  { once: true }
);
