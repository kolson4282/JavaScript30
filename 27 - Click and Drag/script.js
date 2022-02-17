const slider = document.querySelector(".items");

const state = {
  isDown: false,
  startX: 0,
  scrollLeft: 0,
};

// let isDown = false;
// let startX;
// let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  state.isDown = true;
  slider.classList.add("active");
  state.startX = e.pageX - slider.offsetLeft;
  state.scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  state.isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  state.isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!state.isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - state.startX;
  slider.scrollLeft = state.scrollLeft - walk * 3;
});
