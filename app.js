// elements
const inputField = document.querySelector("#text-field");
const wordsCounter = document.querySelector("#words-counter");
// functions
inputField.addEventListener("input", function (e) {
  const value = e.target.value;
  //   words
  const words = value.split(/\s+/).filter((item) => item.length);
  wordsCounter.textContent = words.length;
  
});