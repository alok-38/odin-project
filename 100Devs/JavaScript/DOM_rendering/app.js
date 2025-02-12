// Simulate preparing the soup and adding ingredients
let ingredients = ["Tofu", "Salt", "Water"];

// function to render the list dynamically
function renderIngredients() {
    // Get the element where the ingredients are displayed
    const ingredientsEl = document.getElementById('ingredients');
    // Update the ingredients
    ingredientsEl.innerText = `Ingredients: ${ingredients.join(", ")}`;
}

// function to add a tomato to the ingredient
function addTomato() {
    // Add a tomato if its not already added
    if (!ingredients.includes("Tomato")) {
        ingredients.push("Tomato");
        // Re-render the DOM after adding the tomato
        renderIngredients();
    } else {
        alert("Tomato is already in the soup!");
    }
}

// Add event listener to the button
document.querySelector('button').addEventListener('click', addTomato);