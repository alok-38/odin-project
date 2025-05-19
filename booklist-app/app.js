document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const titleEl = document.getElementById('title').value.trim();
    const authorEl = document.getElementById('author').value.trim();
    const isbnEl = document.getElementById('isbn').value.trim();
    const errorEl = document.getElementById('error');

    if (!titleEl || !authorEl || !isbnEl) {
        errorEl.textContent = 'Please fill in all fields';
        errorEl.style.backgroundColor = 'orange';
        errorEl.style.color = 'white';
        errorEl.classList.remove('hidden');

        setTimeout(() => {
            errorEl.textContent = '';
            errorEl.style.backgroundColor = '';
            errorEl.style.color = '';
            errorEl.classList.add('hidden');
        }, 2500);
        return;
    }

    // Add book to table
    const tbody = document.querySelector('table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${titleEl}</td>
        <td>${authorEl}</td>
        <td>${isbnEl}</td>
    `;
    tbody.appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});
