var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var colorDisplay = document.getElementById("colorDisplay");
var messagedisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var modeButton = document.getElementsByClassName("modeButton");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = (this.style.backgroundColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            messageDisplay.style.color = "green";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            messageDisplay.textContent = "Try Again";
            messageDisplay.style.color = "red";
            this.style.backgroundColor = "#232323";
        }
    });
}

for (var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        modeButton[2].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
            numSquares = 3;
        } 
        else if(this.textContent === "Very Hard"){
            numSquares = 9;
        }
        else {
            numSquares = 6;
        }
        reset();
    });
}

resetButton.addEventListener("click", function(){
    reset();
});

function pickColor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function reset(){
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "slateblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

function generateColors(num){
    var array = [];
    for (var i = 0; i < num; i++){
        array.push(randomNumber());
    }
    return array;
}

function randomNumber(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
    return colorString;
}