function updateConversion(amountId, paymentMethodId, resultId) {
    var amount = document.getElementById(amountId).value;
    var paymentMethod = document.getElementById(paymentMethodId).value;
    var resultField = document.getElementById(resultId);
    
    // Placeholder conversion rates (replace with actual rates)
    var conversionRates = {
        'PayPal': amount * 1.01, // Example rate
        'Bitcoin': amount * 0.0001, // Example rate
        'Payoneer': amount * 1.02 // Example rate
    };
    
    var result = conversionRates[paymentMethod] || 0;
    resultField.value = result.toFixed(2);
}

document.getElementById('amount1').addEventListener('input', function() {
    updateConversion('amount1', 'payment-method1', 'result');
});
document.getElementById('payment-method1').addEventListener('change', function() {
    updateConversion('amount1', 'payment-method1', 'result');
});
document.getElementById('payment-method2').addEventListener('change', function() {
    updateConversion('amount1', 'payment-method2', 'result');
});

