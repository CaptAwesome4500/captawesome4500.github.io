(function() {
    // Define the URL of the CSS file
    const cssHref = 'https://captawesome4500.github.io/styles.css';
    
    // Generate a cache-busting parameter for CSS using the current timestamp (in seconds)
    const cssCacheBuster = Math.round(new Date().getTime() / 1000);
    
    // Create a new link element for CSS
    const cssLink = document.createElement('link');
    
    // Set the href attribute of the CSS link element with the cache-busting parameter
    cssLink.setAttribute('href', `${cssHref}?cb=${cssCacheBuster}`);
    
    // Set the rel attribute of the CSS link element to 'stylesheet'
    cssLink.setAttribute('rel', 'stylesheet');
    
    // Append the CSS link element to the <head> element of the document
    document.head.appendChild(cssLink);
    
    // Define the URLs of the JavaScript files
    const jsFiles = [
        'https://captawesome4500.github.io/scripts/cache_buster.js',
        'https://captawesome4500.github.io/scripts/tic_tac_toe.js',
        'https://captawesome4500.github.io/experimental/load_lang.js',
        // Add more URLs as needed
    ];
    
    // Generate a cache-busting parameter for JavaScript using the current timestamp (in seconds)
    const jsCacheBuster = Math.round(new Date().getTime() / 1000);
    
    // Loop through the array of JavaScript file URLs
    jsFiles.forEach(function(jsSrc) {
        // Create a new script element for each JavaScript file
        const jsScript = document.createElement('script');
        
        // Set the src attribute of the script element with the cache-busting parameter
        jsScript.setAttribute('src', `${jsSrc}?cb=${jsCacheBuster}`);
        
        // Append the script element to the <head> element of the document
        document.head.appendChild(jsScript);
    });
})();
