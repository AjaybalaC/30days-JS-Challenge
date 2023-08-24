document.addEventListener("DOMContentLoaded", function () {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();

	const day = document.querySelector(".calendar-dates");
	const currdate = document.querySelector(".calendar-current-date");
	const prenexIcons = document.querySelectorAll(".calendar-navigation span");

	const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const manipulate = () => {
		let dayone = new Date(year, month, 1).getDay();
		let lastdate = new Date(year, month + 1, 0).getDate();
		let dayend = new Date(year, month, lastdate).getDay();
		let monthlastdate = new Date(year, month, 0).getDate();
		let lit = "";

		for (let i = dayone; i > 0; i--) {
			lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
		}

		for (let i = 1; i <= lastdate; i++) {
			let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
			lit += `<li class="${isToday}">${i}</li>`;
		}

		for (let i = dayend; i < 6; i++) {
			lit += `<li class="inactive">${i - dayend + 1}</li>`
		}

		currdate.innerText = `${months[month]} ${year}`;
		day.innerHTML = lit;
	}

	manipulate();

	prenexIcons.forEach(icon => {
		icon.addEventListener("click", () => {
			month = icon.id === "calendar-prev" ? month - 1 : month + 1;
			if (month < 0 || month > 11) {
				date = new Date(year, month, new Date().getDate());
				year = date.getFullYear();
				month = date.getMonth();
			} else {
				date = new Date();
			}
			manipulate();
		});
	});
});
// ... (previous JavaScript code) ...

const manipulate = () => {
    // ... (previous manipulation code) ...

    // Fade out the calendar content
    day.style.opacity = 0;

    setTimeout(() => {
        // Update the calendar content
        day.innerHTML = lit;

        // Update the text of the current date element
        currdate.innerText = `${months[month]} ${year}`;

        // Fade in the calendar content
        day.style.opacity = 1;
    }, 300); // Delay the content update for 300ms (adjust as needed)
}

// ... (rest of the JavaScript code) ...
