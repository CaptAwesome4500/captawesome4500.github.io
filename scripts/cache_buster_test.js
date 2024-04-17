(function() {
    // Set cache-busting parameter for CSS and JavaScript
    const cacheBuster = Math.round(new Date().getTime() / 1000);

    // Set cache-control headers to prevent caching for all resources
    const setCacheControl = function(url) {
        fetch(url, { cache: 'no-store' });
    };

    // Define the URLs of the CSS, JavaScript, and JSON files
    const cssUrl = 'https://captawesome4500.github.io/styles.css';
    const jsFiles = [
        'https://captawesome4500.github.io/scripts/cache_buster.js',
        'https://captawesome4500.github.io/scripts/tic_tac_toe.js',
        'https://captawesome4500.github.io/experimental/load_lang.js',
        // Add more URLs as needed
    ];
    const jsonFiles = [
        'https://captawesome4500.github.io/experimental/translations.json',
        // Add more URLs as needed
    ];

    // Fetch CSS and JavaScript files with cache-control headers
    setCacheControl(`${cssUrl}?cb=${cacheBuster}`);
    jsFiles.forEach(function(jsSrc) {
        setCacheControl(`${jsSrc}?cb=${cacheBuster}`);
    });

    // Fetch JSON files with cache-control headers
    jsonFiles.forEach(function(jsonSrc) {
        setCacheControl(`${jsonSrc}?cb=${cacheBuster}`);
    });
})();
