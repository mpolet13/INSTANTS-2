document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const fromAccountSelect = document.getElementById('fromAccount');
    const toAccountSelect = document.getElementById('toAccount');
    const resultInput = document.getElementById('result');
    const accountAddressInput = document.getElementById('accountAddress');

    function updateConversion() {
        const amount = parseFloat(amountInput.value);
        const fromAccount = fromAccountSelect.value;
        const toAccount = toAccountSelect.value;

        if (!amount || fromAccount === toAccount) {
            resultInput.value = '';
            accountAddressInput.value = '';
            return;
        }

        // Simulate conversion
        let conversionRate = 1; // Placeholder for conversion rate
        if (fromAccount === 'bitcoin' && toAccount === 'paypal') {
            conversionRate = 29000; // Example rate
        }

        const result = amount * conversionRate;
        resultInput.value = `$${result.toFixed(2)}`;

        // Display the account address based on selection
        if (toAccount === 'paypal') {
            accountAddressInput.value = 'Instant-ex@gmail.com'; // Example address
        } else if (toAccount === 'bitcoin') {
            accountAddressInput.value = 'f46z5e4r98rz9e8r79zer79zer7ze9r7e'; // Example address
        }
    }

    amountInput.addEventListener('input', updateConversion);
    fromAccountSelect.addEventListener('change', updateConversion);
    toAccountSelect.addEventListener('change', updateConversion);
});
