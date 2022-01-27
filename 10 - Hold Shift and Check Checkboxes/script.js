const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    let inbetween = false;

    checkboxes.forEach((checkbox) => {
      if (inbetween) {
        checkbox.checked = true;
      }
      if (checkbox == lastChecked || checkbox == this) {
        inbetween = !inbetween;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
