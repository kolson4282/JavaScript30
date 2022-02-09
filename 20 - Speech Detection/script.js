window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

// let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(document.createElement("p"));

recognition.addEventListener("result", (e) => {
  const transcript = [...e.results]
    .map((result) => result[0].transcript)
    .join("");

  //   p.textContent = transcript;
  words.lastChild.textContent = transcript;
  if (e.results[0].isFinal) {
    // p = document.createElement("p");
    words.appendChild(document.createElement("p"));
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
