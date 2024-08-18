document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
});
// settings.js

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
        mainContent.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
    });
});
