const buttonEl = document.getElementById('change-btn');
const headingEl = document.getElementById('heading');

const setUserName = () => {
	const myName = prompt("Please enter your name: ");
	localStorage.setItem("name", myName);
	headingEl.textContent = `Mozilla is cool, ${myName}`;
	// If nothing is there in the local storage
	if (!localStorage.getItem("name")) {
		setUserName();
	} else {
		const storedName = localStorage.getItem("name");
		// Update the h1 after retriving the stored name
		headingEl.textContent = `Mozilla is cool, ${storedName}`;
	}
}

buttonEl.addEventListener('click', setUserName);

// Image switcher code
let imageEl = document.querySelector('img');
imageEl.onclick = function () {
	let mySrc = imageEl.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		imageEl.setAttribute('src', 'images/firefox2.png');
	} else {
		imageEl.setAttribute('src', 'images/firefox-icon.png')
	}
}