const text = "I don't expect people to listen to my crap";
let index = 0;
let interval = null;

const button = document.querySelector('button');

// Create a container for the text
const container = document.createElement('div');
document.body.appendChild(container);

const writeText = () => {
    container.innerText = text.slice(0, index);
    index++;
    if (index > text.length) {
        clearInterval(interval);
        interval = null;
    }
};

button.addEventListener('click', () => {
    if (interval !== null) return; 
    index = 0;
    interval = setInterval(writeText, 100);
});
