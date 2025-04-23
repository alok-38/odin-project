document.addEventListener("DOMContentLoaded", () => {
    const contacts = [
        { name: "Alice Anderson" },
        { name: "Albert Avery" },
        { name: "Bob Brown" },
        { name: "Barbara Blake" },
        { name: "Charlie Chaplin" },
        { name: "Claire Carter" },
        { name: "Daniel Day-Lewis" },
        { name: "Eve Evans" },
    ];

    // Display the contacts under their corresponding letter headings
    const searchBox = document.getElementById('searchBox');
    const headingEls = document.querySelectorAll("main h2");

    // Render the list
    function renderList(filter = "") {
        // Create li element
        const liEl = document.createElement('li');
    }

});
