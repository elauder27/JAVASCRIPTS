const randomNumber = Math.random();
let result = "";
let guess = "heads";
guess = "tails";

randomNumber < 0.5 ? (result = "heads") : (result = "tails");

guess === result ? console.log("you lose!") : console.log("you win!");

/* if (randomNumber < 0.5) {
  result = "heads";
} else {
  result = "tails";
}

if (guess === result) {
  console.log("you win!");
} else {
  console.log("you lose!");
}
 */
