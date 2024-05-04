document.addEventListener('DOMContentLoaded', function() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("navigation").innerHTML = this.responseText;
		}
		};
		xhttp.open("GET", "https://captawesome4500.github.io/menu.html", true);
		xhttp.send();
		});