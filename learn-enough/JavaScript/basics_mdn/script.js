const headingEl = document.getElementById('heading');
const mainEl = document.querySelector('main');
const buttonEl = document.getElementById('change-btn');

const appendHeadingAndChangeBackground = () => {
	const userName = prompt("Please enter your name: ");
	// const currentBackground = mainEl.style.backgroundColor;
	let currentText = headingEl.textContent;
	headingEl.textContent = currentText + ":" + " " + userName;
	mainEl.style.backgroundColor = 'tomato';
	headingEl.style.color = "#ffffff";
}

buttonEl.addEventListener('click', appendHeadingAndChangeBackground);