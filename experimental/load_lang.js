let translationsData;


// Function to update output based on language
function updateOutput(language, translations) {
    translationsData = translations; // Store translations globally
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
