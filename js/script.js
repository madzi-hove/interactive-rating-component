const form = document.querySelector("form");
const inputs = document.querySelectorAll("[type='radio']");
const ratingContainer = document.querySelector(".form__ratings");
let notChecked = true;
console.log(inputs);

// Removes active state class
function removeActiveState() {
	inputs.forEach((input) => {
		if (input.parentNode.classList.contains("rating--checked")) {
			input.parentNode.classList.remove("rating--checked");
		}
	});
}

// Checks for active radio button
function checkForInput(inputs) {
	return inputs.every((input) => {
		return input.checked === false;
	});
}

// Add class to radio button container to show message
function invalidMessage() {
	ratingContainer.classList.add("invalid");
	setTimeout(() => {
		ratingContainer.classList.remove("invalid");
	}, 1000);
}

// Add event listener to form and use bubbling to caputre event
form.addEventListener("click", (e) => {
	if (e.target.type === "radio") {
		removeActiveState();
		e.target.parentNode.classList.add("rating--checked");
	}

	if (e.target.type === "submit") {
		const inputsArray = [...inputs];
		notChecked = checkForInput(inputsArray);
		if (notChecked === true) {
			e.preventDefault();
			invalidMessage();
		}
	}
});

form.addEventListener("submit", () => {
	console.log("submitted");
});
