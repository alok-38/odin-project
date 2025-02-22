const andi = document.querySelector("#andi");
const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

document.querySelector("#andINext").addEventListener('click', andINext);
document.querySelector("#claireNext").addEventListener('click', claireNext);
document.querySelector("#sharleenNext").addEventListener('click', sharleenNext);

function andINext() {
    // Hide other images
    claire.classList.add("hidden");
    sharleen.classList.add("hidden");
    // Show Andi's image
    andi.classList.remove("hidden");
}

function claireNext() {
    // Hide other images
    andi.classList.add("hidden");
    sharleen.classList.add("hidden");
    // Show Claire's image
    claire.classList.remove("hidden");
}

function sharleenNext() {
    // Hide other images
    andi.classList.add("hidden");
    claire.classList.add("hidden");
    // Show Sharleen's image
    sharleen.classList.remove("hidden");
}
