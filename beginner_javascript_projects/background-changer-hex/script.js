const pEl = document.getElementById('colorCode');
const toast = document.getElementById('toast');

const getRandomHexColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    const color = `#${hex}`;
    document.body.style.backgroundColor = color;
    pEl.textContent = color;
}

const showToast = () => {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1500);
}

const copyColorToClipboard = () => {
    navigator.clipboard.writeText(pEl.textContent)
        .then(showToast)
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', getRandomHexColor);
pEl.addEventListener('click', copyColorToClipboard);