// match shapes
// create a function that displays images of shapes when clicked

// const playBtn = document.querySelector("play-btn");
// playBtn.addEventListener("click", startPlay);

// function startPlay() {
//   return document.getElementsByClassName(".square");
// }



//** DISPLAYING HELLO & [NAME] */

const submitBtn = document.querySelector("#submit-btn")
submitBtn.addEventListener("click", showName)

function showName() {

  const enteredName = document.querySelector("#entered-name")
  const welcomeText = document.querySelector("#welcome")
  welcomeText.innerText = `Hello ${enteredName.value}!`

}
