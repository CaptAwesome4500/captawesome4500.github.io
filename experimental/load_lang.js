let translationsData;

let level = [null, null, null];
	//level array breakdown [act][level][text]

// Function to update output based on language
function updateOutput(language, translations) {
    translationsData = translations[language]; // Store translations globally
    var outputDiv = document.getElementById('output');
    var translation = translations[language];
    if (translation) {
        outputDiv.innerHTML = `
            <p>${translation.greeting}</p>
            <p>${translation.farewell}</p>
       `;
    } else {
        outputDiv.textContent = 'Language not found';
    }
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

export { translationsData }; // Export translations object


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

		if(level[2] == 0){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proOne;
			level[2] = level[2]++;
		
		}

		else if(level[2] == 1){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proTwo;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 2){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proThree;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 3){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proFour;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 4){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proFive;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 5){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proSix;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 6){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proSeven;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 7){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proEight;
			level[2] = level[2]++;
		
		}
		
		else if(level[2] == 8){
		
			document.getElementById("text_go_here").innerHTML = translationsData.proNine;
		
		}
	}
	console.log(level)
}

// Add event listener to the button
document.getElementById('nextButton').addEventListener('click', function() {
    // Call the next function when the button is clicked
    next_text();
});
