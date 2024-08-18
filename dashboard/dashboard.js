document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    
    navLinks.forEach(link => {
        // Check if the href attribute matches the current page URL
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
