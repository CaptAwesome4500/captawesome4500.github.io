import { translationsData } from './load_lang.js';

import { next } from './game.js';

// Add event listener to the button
document.getElementById('nextButton').addEventListener('click', function() {
    // Call the next function when the button is clicked
    next();
});

// Now you can use translationsData.greeting in this file
var text = 0;

function next()
{
	Console.Log(text)
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
}


export { next };
