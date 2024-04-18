let translationsData;

let level = [null, null, null];
	//level array breakdown [act][level][text]

let anwser_correct = null;

// Function to update output based on language
function updateOutput(language, translations) {
translationsData = translations[language]; // Store translations globally
var outputDiv = document.getElementById('output');
var translation = translations[language];
}

// Event listener for language selection change
document.getElementById('languageSelect').addEventListener('change', function () {
var selectedLanguage = this.value;

// Load JSON file using fetch
fetch('translations.json')
.then(response => {
if (!response.ok) {
throw new Error('Failed to fetch translations');
}
return response.json();
})
.then(translations => {
updateOutput(selectedLanguage, translations);
})
.catch(error => {
console.error('Error fetching translations:', error);
});
});

// Initialize output with default language (English)
updateOutput('en', {});

//export { translationsData }; // Export translations object


// Now you can use translationsData.greeting in this file
var text = 0;

function next()
{
	console.log(translationsData.farewell)
	console.log(translationsData.greeting)
	console.log(translationsData)
	//console.log(text)
	text++;
	if (text == 2){
		text = 0
	}

	if (text == 0){
		document.getElementById("text_go_here").innerHTML = translationsData.greeting;
	}

	else if (text == 1){
		document.getElementById("text_go_here").innerHTML = translationsData.farewell;
	}
	console.log(text)
}

function next_text()
{
	console.log(level)
	if (level[0] == null){
		
		//set the act to 0 (Prolouge)
		level = [0, null, 0]
	}

	else if(level[0] == 0){ //if its the prolouge

		//document.getElementById("toh_act").innerHTML = translationsData.actPro; //Change act title
		//document.getElementById("toh_level").innerHTML = translationsData.actLevel; //Change level title

		if(level[2] == 0){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proOne;
			level[2]++;
		
		}

		else if(level[2] == 1){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proTwo;
			level[2]++;
		
		}
		
		else if(level[2] == 2){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proThree;
			level[2]++;
		
		}
		
		else if(level[2] == 3){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proFour;
			level[2]++;
		
		}
		
		else if(level[2] == 4){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proFive;
			level[2]++;
		
		}
		
		else if(level[2] == 5){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proSix;
			level[2]++;
		
		}
		
		else if(level[2] == 6){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proSeven;
			level[2]++;
		
		}
		
		else if(level[2] == 7){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proEight;
			level[2]++;
		
		}
		
		else if(level[2] == 8){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proNine;
			level = [1, 1, 0];
		}
	}

	else if(level[0] == 1){ //if its act I
		
		if(level[2] == 0){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.three;
			level[2]++;
		
		}

		else if(level[2] == 1){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.four;
			level[2]++;
		
		}
		else if(level[2] == 2){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.five;
			level[2]++;
		
		}
		else if(level[2] == 3){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.six;
			level[2]++;
		
		}
		else if(level[2] == 4){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.seven;
			level[2]++;
		
		}
		else if(level[2] == 5){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.eight;
			level[2]++;
		
		}
		else if(level[2] == 6){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.nine;
			level[2]++;
		
		}
		else if(level[2] == 7){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.ten;
			level[2]++;
		
		}
		else if(level[2] == 8){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.eleven;
			level[2]++;
		
		}
		else if(level[2] == 9){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.twelve;
			level[2]++;
		
		}
		else if(level[2] == 10){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.thirteen;
			level[2]++;
		
		}
		else if(level[2] == 11){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.fourteen;
			level[2]++;
		
		}
		else if(level[2] == 12){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.fifteen;
			level[2]++;
		
		}
		else if(level[2] == 13){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.sixteen;
			level[2]++;
		
		}
		else if(level[2] == 14){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.seventeen;
			level[2]++;
		
		}
		else if(level[2] == 15){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.riddle;

		
		}
		else if(level[2] == 16){
		
			lexion_riddle();
			

		}
		//correct
		else if(level[2] == 17 && anwser_correct == true){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionCorrectOne;
			level[2]++;
		
		}
		else if(level[2] == 18 && anwser_correct == true){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionCorrectTwo;
			level[2]++;
		
		}
		else if(level[2] == 19 && anwser_correct == true){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionCorrectThree;
			level[2]++;
		
		}
		//incorrect
		else if(level[2] == 17 && anwser_correct == false){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionIncorrectOne;
			level[2]++;
		
		}
		else if(level[2] == 18 && anwser_correct == false){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionIncorrectTwo;
			level[2]++;
		
		}
		else if(level[2] == 19 && anwser_correct == false){
		
			document.getElementById("text_go_here").innerHTML = translationsData.actI.levelI.lexionIncorrectThree;
			level[2]++;
		
		}


	}

	console.log(level)
}

function lexion_riddle()
{
	const anwser = prompt(translationsData.actI.levelI.lexion_anwser + ":");

	if (anwser.includes("seven") == true || anwser.includes("7") == true){
		
		level[2]++;
		anwser_correct = true;
		next_text();
		
	}
	else{
		level[2]++;
		anwser_correct = false;
		next_text();
	}
}

// Add event listener to the button
document.getElementById('nextButton').addEventListener('click', function() {
// Call the next function when the button is clicked
next_text();
});
