const divEls = document.querySelectorAll('div');

// Get the computed style of each div
const firstDivColor = window.getComputedStyle(divEls[0]).backgroundColor;
const secondDivColor = window.getComputedStyle(divEls[1]).backgroundColor;
const thirdDivColor = window.getComputedStyle(divEls[2]).backgroundColor;

// Store the original body background color
const originalBodyColor = window.getComputedStyle(document.body).backgroundColor;

// Add event listeners to each div
// Add event listener for mouseenter to change background color
divEls[0].addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = firstDivColor; // Change background color to div's color
    divEls[0].style.backgroundColor = originalBodyColor; // Change div's background to the original body color
});

// Add event listener for mouseleave to revert background color
divEls[0].addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = originalBodyColor; // Revert background color to original body color
    divEls[0].style.backgroundColor = firstDivColor; // Revert div's background color to its original
});

divEls[1].addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = secondDivColor; // Change background color to div's color
    divEls[1].style.backgroundColor = originalBodyColor; // Change div's background to the original body color
});

// Add event listener for mouseleave to revert background color
divEls[1].addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = originalBodyColor; // Revert background color to original body color
    divEls[1].style.backgroundColor = secondDivColor; // Revert div's background color to its original
});

divEls[2].addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = thirdDivColor; // Change background color to div's color
    divEls[2].style.backgroundColor = originalBodyColor; // Change div's background to the original body color
});

// Add event listener for mouseleave to revert background color
divEls[2].addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = originalBodyColor; // Revert background color to original body color
    divEls[2].style.backgroundColor = thirdDivColor; // Revert div's background color to its original
});
