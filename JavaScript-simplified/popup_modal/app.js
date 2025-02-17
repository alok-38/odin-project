const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

function openModal() {
    modal.classList.add('open');
    overlay.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); 
