let counter = 0;

// HTML.
const numberDiv = document.querySelector("._number");
const minus = document.querySelector("._decrement");
const plus = document.querySelector("._increment");

function updateCounter(type) {
	setTimeout(() => {
		let parsed = type == "+" ? counter++ : counter--;
		numberDiv.innerText = counter;
		numberDiv.style.transform = type == "+" ? "translateY(100%)" : "translateY(-100%)";
		setTimeout(() => {
			numberDiv.style.transform = "translateY(0%)";
			numberDiv.style.opacity = "1";
		}, 350);
	}, 500);

	numberDiv.style.transform = type == "+" ? "translateY(-100%)" : "translateY(100%)";
	numberDiv.style.opacity = "0";

	// Prevent clicking the button multiple times.
	plus.disabled = true;
	minus.disabled = true;

	setTimeout(() => {
		plus.disabled = false;
		minus.disabled = false;
	}, 1400);
};

minus.addEventListener("click", () => updateCounter("-"));
plus.addEventListener("click", () => updateCounter("+"));