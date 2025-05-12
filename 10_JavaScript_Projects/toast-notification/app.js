const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('div');

buttonEl.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = "JavaScript is Hard, but interesting!";
    containerEl.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

