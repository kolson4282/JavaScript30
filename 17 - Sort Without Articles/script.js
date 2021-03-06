const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(name) {
  return name.replace(/^(the |a |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
const list = sortedBands.map((band) => `<li>${band}</li>`).join("");
const bandList = document.querySelector("#bands");
bandList.innerHTML = list;
