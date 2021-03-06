//greeting
var input = document.getElementById("userName");
var button = document.getElementById("button");
var p = document.getElementById("text");
var addText = function() {
var userValue = input.value;
var h3 = document.createElement("h3");
var textNode = document.createTextNode("Dive in " + userValue);
  p.appendChild(h3);
  h3.appendChild(textNode);
  input.value = " ";
  button.removeEventListener("click", addText);
};
button.addEventListener("click", addText);
//greeting


// choose random word
var sharkNames = [
  "squatina squatina", "cetorhinus maximus",
  "mitsukurina owstoni", "sphyrna mokarran", "carcharodon carcharias",
  "manta birostris", "etmopterus benchleyi", "alopias vulpinus",
  "galeocerdo cuvier", "rhincodon typus", "stegostoma fasciatum"
  ];


function randomizeWords(words) {
  var randomIndex = Math.floor(Math.random() * sharkNames.length);
  return sharkNames[randomIndex];
}

var sharks = randomizeWords(sharkNames);


// convert word to individual letters
var letters = sharks.split("");


// convert split up word to equivalent number of dashes
function dashes(letters) {
  // create a new array
  var dash = [];
  // for length of letters
  letters.forEach(function(){
  // add dash to new array
    dash.push("-");
  });
  // return new array
  return dash;
}

var dashWord = dashes(letters);

// check letter
function checkLetter(letter) {
  if (letters.indexOf(letter) > -1) {
    return true;
  }else {
    return false;
  }
}

// fill in dashes
function replaceDash(letter) {
  for(var i = 0; i < sharks.length; i++) {
    if(letter === sharks[i]){
      dashWord[i] = letter;
    }
  }
  if (dashWord.join("") === sharks){
    winAlert();
    // showShark();
  }
}

// var showShark = function() {
//   var image = document.getElementsByClassName('squatina-squatina');
//   image.classList.toggle('squatina-squatina')
// }

// render to browser
function render(x) {
  display.textContent = x;
}


// click events

var input   = document.getElementById("input");
var display = document.getElementById("display");
var start   = document.getElementById("start");
var guess   = document.getElementById("guess");

start.addEventListener("click", function(){
  // words;
  sharks = randomizeWords(sharkNames);
  letters = sharks.split("");
  dashWord = dashes(letters);
  render(dashWord.join(""));
  console.log("start game");

  wrong.length = 0;
});

var guessButton = function() {
  var letter = input.value;
  // input.value;
  if (checkLetter(letter)) {
    console.log("correct!");
    replaceDash(letter);
    render(dashWord.join(""));

  } else {
      console.log("guess again");
      wrongGuess(letter);
      add();
      lose();
      console.log(counter);
  }
  input.value = "";
};

guess.addEventListener("click", guessButton);

input.addEventListener("keyup",function() {
  if (event.keyCode === 13) {
    guessButton();
  }
});

// displays wrong guesses
var wrong = [];
var wrongLetters = document.getElementById("wrongLetters");
var sharkParts = [
  document.querySelector('#lTail'),
  document.querySelector('#rTail'),
  document.querySelector('#lPelvic'),
  document.querySelector('#rPelvic'),
  document.querySelector('#lBody'),
  document.querySelector('#rBody'),
  document.querySelector('#lHead'),
  document.querySelector('#rHead')
];

var i = 0;

function wrongGuess(letter) {
  wrong.push(letter);
  var wrongString = wrong.join(", ");
  wrongLetters.value = wrongString;
  sharkParts[i].style.visibility = "visible";
  i = i + 1;
}

// winner


function winAlert() {
  var alert = document.getElementById("alert");
  alert.textContent = "You Survived!";
}

var counter = 0;

function add() {
  return counter +=1;
}

function lose() {
  if (counter === 8) {
    alert("you lost!");
  }
}


