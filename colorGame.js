var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colorDisplay = document.querySelector("#colorDisplay");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModebuttons();
	setupSquares();



 
function setupModebuttons(){
	//modeButtons eventListener
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent ==="Easy" ? numOfSquares=3:numOfSquares=6;
		reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {

 	//add click Listeners to squares
 	squares[i].addEventListener("click", function(){

 	//grab color of clicked square
 	var clickedColor =	this.style.backgroundColor;

 	//compare color to pickedColor
 	if(clickedColor === pickedColor){
 	messageDisplay.textContent = "Correct!";

 	//assign all squares the pickedColour
 	changeColors(clickedColor);
 		// for (var i=0; i <squares.length; i++) {
 		// 	squares[i].style.backgroundColor = clickedColor;
 		// }
	h1.style.backgroundColor = clickedColor;
	resetButton.textContent = "Play Again?";
 	}

 	else{
 		this.style.backgroundColor = "#232323";
 		messageDisplay.textContent = "Try Again";
 	}
 	
 	})
 }
 reset();
}
}


function reset(){
	messageDisplay.textContent=" ";
 	resetButton.textContent="New Colors";

	colors = generateRandomColors(numOfSquares);

 	//change pickedColor
 	pickedColor = pickColor();

 	//change colorDisplay to new pickedColor
 	colorDisplay.textContent = pickedColor;

 	//reflect all new colors in the squares
 	for (var i = 0; i < squares.length; i++) {
 		if (colors[i]) {
 			squares[i].style.display ="block";
 			squares[i].style.backgroundColor = colors[i];
 		}

 		else{
 			squares[i].style.display = "none";

 		}
 		
 	}

 	h1.style.backgroundColor = "steelblue";
 }


//  easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numOfSquares =3;
// 	//generate 3 random colors
// 	colors = generateRandomColors(numOfSquares);

// 	//change pickedColor
// 	pickedColor = pickColor();

// 	//display pickedColor
// 	colorDisplay.textContent = pickedColor;

// 	//assign colors to 3 squares
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}

// 		else
// 		squares[i].style.display = "none";

// 	}

// 	})

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numOfSquares =6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";

// 	}
// })




 resetButton.addEventListener("click",function(){

 	reset();
 })


 function changeColors(color){
 	for (var i=0; i <squares.length; i++) {
 			squares[i].style.backgroundColor = color;
 		}

 }

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];

	//repeat num times
	for (var i = 0; i<num; i++)
	{//get random colour and push into array
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() *256);

	//pickp a "green" from 0-255
	var g = Math.floor(Math.random() *256);
	
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() *256);
	
	return "rgb(" + r +", " + g +", " + b +")";
}