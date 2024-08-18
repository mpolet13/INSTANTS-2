// JavaScript can be used for form validation, dynamic updates, etc.

// JavaScript can be used for form validation, dynamic updates, etc.

// Example of a simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    if (!amount || !from || !to) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields.');
    }
});
