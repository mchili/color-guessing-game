var score = 0;
var numOfSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbValue = document.getElementById("rgbValue");
var messageDisplay = document.querySelector("#message");
var scoreDisplay = document.querySelector("#scoreMessage");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
//var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    /*setupModeButtons();*/
    //keepScore();
    setupSquares();
    reset();
}


/*
var numClicked = 0;
squares.onclick = function() {
        numClicked++;

        if (numClicked = 1) {
            score = score + 50;
        }
        if (numClicked = 2) {
            score = score + 30;
        }
        if (numClicked = 3) {
            score = score + 10;
        }
        if (numClicked = 4) {
            score = score - 5;
        }
        if (numClicked = 5) {
            score = score - 10;
        }
        if (numClicked = 6) {
            score = score - 15;
        }
}
*/

/*// grab number of clicks on sqaure
var numClicked = 0;
for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares   
    squares[i].addEventListener("click", keepScore);
    numClicked++;
}

function keepScore() {
    if (numClicked = 1) {
        score = score + 50;
    }
    if (numClicked = 2) {
        score = score + 30;
    }
    if (numClicked = 3) {
        score = score + 10;
    }
    if (numClicked = 4) {
        score = score - 5;
    }
    if (numClicked = 5) {
        score = score - 10;
    }
    if (numClicked = 6) {
        score = score - 15;
    }

}*/

//sets up squares, and defines what happens when pick right color or wrong color 
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                score = score + 40;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.background = clickedColor;
                h2.style.background = clickedColor;

            } else {
                score = score - 10;
                this.style.background = "#0e2f44";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

/*function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      // this takes care of removing the select class
      // for both the easy and hard mode
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      // this is used to target and add
      // the selected class to the element that is clicked
      this.classList.add("selected");

      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;

      reset();

    });
  }
}*/

//resets stuff when game over and hit New Color 
function reset() {
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    rgbValue.textContent = pickedColor;
    scoreDisplay.textContent = "Score:" + score;
    // keep colors new
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        };

    }
    // reset background of h1&h2 back to original 
    h1.style.background = "#00ced1";
    h2.style.background = "#00ced1";
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
}

//function resets game when New Color clicked 
resetButton.addEventListener("click", function () {
    reset();
});


// change background of 6 squares to correct picked square
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

//function made so can call in other methods to define picked color 
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//makes an array full of random colors and pushes to randomColor() to use 
function generateRandomColor(num) {
    var randomColors = [];
    for (var i = 0; i < num; i++) {
        randomColors.push(randomColor());
    }
    return randomColors;
}


// Does the math to find random colors  
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
