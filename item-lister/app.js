const svgEl = document.querySelector('svg');
const headerInputEl = document.querySelector('header input');
const mainInputEl = document.querySelector('main input');
const buttonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

function addItem() {
    const inputItem = mainInputEl.value.trim();
    if (inputItem === "") return;

    // Create <li>
    const liEl = document.createElement('li');
    liEl.textContent = inputItem;

    // Create SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('height', '24px');
    svg.setAttribute('width', '24px');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('fill', '#EA3323');
    svg.style.cursor = 'pointer';

    // Create <path> inside SVG
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z');

    // Append path to SVG
    svg.appendChild(path);

    // Add delete functionality (optional)
    svg.addEventListener('click', () => {
        liEl.remove(); // Removes the entire <li>
    });

    // Append SVG to li
    liEl.appendChild(svg);

    // Add li to ul
    ulEl.appendChild(liEl);

    // Clear input
    mainInputEl.value = "";
}


buttonEl.addEventListener('click', addItem);

mainInputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

// filter function
function filterItems() {
    let headerInputItem = headerInputEl.value.toLowerCase();
    let liItems = document.querySelectorAll('li');
    let visibleCount = 0;

    liItems.forEach(function (item) {
        let itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.includes(headerInputItem)) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

}


headerInputEl.addEventListener('keyup', filterItems);