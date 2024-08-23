let rates = {};

// Fonction pour récupérer les taux de change depuis l'API Currencylayer
function fetchExchangeRates() {
    const accessKey = 'bbe23011568578eddfe8b78d390edf80'; // Remplace par ta clé API
    const url = `https://apilayer.net/api/live?access_key=${accessKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                rates = data.quotes;
                console.log('Taux de change récupérés:', rates);
            } else {
                console.error('Erreur API:', data.error.info);
            }
        })
        .catch(error => {
            console.error('Erreur de réseau:', error);
        });
}

// Fonction pour mettre à jour la conversion
function updateConversion() {
    const amount = parseFloat(document.getElementById('amount1').value);
    const sourceCurrency = document.getElementById('payment-method1').value;
    const targetCurrency = document.getElementById('payment-method2').value;
    const resultField = document.getElementById('result');

    if (!amount || !rates || !rates[`US${sourceCurrency}`] || !rates[`US${targetCurrency}`]) {
        resultField.value = '';
        return;
    }

    if (sourceCurrency === targetCurrency) {
        resultField.value = `${amount} ${targetCurrency}`;
        return;
    }

    // Calcul du taux de change entre deux devises
    let rateSourceToUSD = rates[`US${sourceCurrency}`];
    let rateTargetToUSD = rates[`US${targetCurrency}`];
    let conversionRate = rateTargetToUSD / rateSourceToUSD;

    const convertedAmount = (amount * conversionRate).toFixed(2);
    resultField.value = `${convertedAmount} ${targetCurrency}`;
    console.log(`Conversion de ${amount} ${sourceCurrency} en ${targetCurrency}: ${convertedAmount}`);
}

// Attacher les événements pour les champs
document.getElementById('amount1').addEventListener('input', updateConversion);
document.getElementById('payment-method1').addEventListener('change', updateConversion);
document.getElementById('payment-method2').addEventListener('change', updateConversion);

// Récupération des taux de change lors du chargement de la page
window.onload = fetchExchangeRates;
