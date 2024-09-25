function poemGenerator(event) {
  let newPoem = document.querySelector("#poem");
  event.preventDefault();
  let inputValue = document.querySelector("#poem-input");
  newPoem.innerHTML = inputValue.value;
}
let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", poemGenerator);

// function generatePoem(event) {
//   event.preventDefault();

//   new Typewriter("#poem", {
//     strings: "La tombe dit à la rose",
//     autoStart: true,
//     delay: 1,
//     cursor: "",
//   });
// }

// let poemFormElement = document.querySelector("#poem-generator-form");
// poemFormElement.addEventListener("submit", generatePoem);
