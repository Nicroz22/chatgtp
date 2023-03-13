const button = document.getElementById("color-button");
const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function() {
	if (body.style.color === "red") {
		body.style.color = "#333";
	} else {
		body.style.color = "red";
	}
});