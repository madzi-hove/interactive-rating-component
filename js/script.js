const form = document.querySelector("form");
const ratingContainer = document.querySelector(".form__ratings");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thank-you");
const rating = document.querySelector(".rating-value");

// Add event listener to form and use bubbling to caputre event
form.addEventListener("click", (e) => {
	if (e.target.type === "radio") {
		e.target.parentNode.classList.add("rating--checked");
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	ratingSection.classList.add("rating--hidden");
	thankYouSection.classList.remove("thank-you--hidden");
	rating.innerText = form.rating.value;
});
