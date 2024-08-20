// Fonction pour récupérer les taux de change depuis l'API Currencylayer
function fetchExchangeRates() {
    const accessKey = 'bbe23011568578eddfe8b78d390edf80'; // Remplace par ta clé API
    const url = `https://apilayer.net/api/live?access_key=${accessKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                return data.quotes;
            } else {
                console.error('Erreur API:', data.error.info);
                return null;
            }
        })
        .catch(error => {
            console.error('Erreur de réseau:', error);
            return null;
        });
}






function updateConversion(amountId, paymentMethodId, resultId) {

    const accessKey = 'bbe23011568578eddfe8b78d390edf80'; // Remplace par ta clé API
    const url = `https://apilayer.net/api/live?access_key=${accessKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`;

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

