//  ===================== a Pen By JMIKEY =====================

var secondsRemaining;
var intervalHandle;

function resetPage(){

	document.getElementById("inputArea").style.display = "block";

}

function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;


	// stop is down to zero
	if (secondsRemaining === 0){
		// function selectWinner() {
		// 	if(blueScore>redScore) {
		// 		var winner = bName;
		// 	}else{
		// 		var winner = rName;
		// 	}
		// }
		// selectWinner();
		alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
		location.reload();
	}

	//subtract from seconds remaining
	secondsRemaining--;

}

function startCountdown(){

	var 
		redName = document.getElementById("RedName"),
		blueName = document.getElementById("BlueName"),
		rName = document.getElementById("PlayeRed").value,
		bName = document.getElementById("PlayeRlue").value;

		redName.innerHTML = rName;
		blueName.innerHTML = bName;

	function resetPage(){
		document.getElementById("inputArea").style.display = "block";
	}

	// get countents of the "minutes" text box
	var minutes = document.getElementById("minutes").value;
	
	// check if not a number
	if (isNaN(minutes)){
		alert("Please enter a number");
		return; // stops function if true
	}

	// how many seconds
	secondsRemaining = minutes * 60;
	
	//every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);

	// hide the form
	document.getElementById("inputArea").style.display = "none";


}

window.onload = function(){

	// create input text box and give it an id of "min"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	inputMinutes.setAttribute("placeholder", "Time( in Minutes )");
	
	//create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start");
	startButton.setAttribute("class","btn");
	startButton.onclick = function(){
		startCountdown();
		location.replace(location.pathname+"#");
		document.body.setAttribute("onkeypress","if (event.keyCode === 97) { RedInc()} else if(event.keyCode === 100) {BlueInc()}");
		var startHere = document.getElementById("start");
		startHere.innerHTML = "MMA SMAIT eNHa";
	};

	//add to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton)		

}