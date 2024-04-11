import { translationsData } from './load_lang.js';

// Now you can use translationsData.greeting in this file
var text = 0;

function next()
{
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
