document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".sidebar nav ul li a");

    // Function to remove the active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
    }

    // Function to add the active class to the clicked link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClasses();
            link.classList.add("active");
        });
    });

    // Highlight the current page based on the URL
    function highlightCurrentPage() {
        const currentURL = window.location.href;
        navLinks.forEach(link => {
            if (currentURL.includes(link.getAttribute("href"))) {
                removeActiveClasses();
                link.classList.add("active");
            }
        });
    }

    highlightCurrentPage();
});
