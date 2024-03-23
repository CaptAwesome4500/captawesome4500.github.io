(function() {
	const href = '../styles.css';
	const cacheBuster = Math.round(new Date().getTime() / 1000);
	const link = document.createElement('link');
	link.setAttribute('href', `${href}?cb=${cacheBuster}`);
	link.setAttribute('rel', 'stylesheet');
	document.head.appendChild(link);
})();
