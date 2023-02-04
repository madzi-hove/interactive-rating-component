const form = document.querySelector("form");
const inputs = document.querySelectorAll("[type='radio']");
const ratingContainer = document.querySelector(".form__ratings");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thank-you");
const rating = document.querySelector(".rating-value");
let notChecked = true;
let formdata;
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
		formData = new FormData(form);
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

form.addEventListener("submit", (e) => {
	ratingSection.classList.add("rating--hidden");
	thankYouSection.classList.remove("thank-you--hidden");
	rating.innerText = formData.get("rating");
	e.preventDefault();
	console.log(Number(formData.get("rating")));
});
