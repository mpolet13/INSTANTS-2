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


//cookies
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("policy-modal");
    const acceptBtn = document.getElementById("accept-policy");

    // Show the modal when the page loads
    modal.style.display = "block";

    // Close the modal when the user clicks "I Agree"
    acceptBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});


//cookies 

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("policy-modal");
    const privacyPolicyLink = document.getElementById("privacy-policy-link");
    const closeBtn = document.querySelector(".modal-close");
    const acceptBtn = document.getElementById("accept-policy");

    // Show the modal when the "Privacy Policy" link is clicked
    privacyPolicyLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when "I Agree" is clicked
    acceptBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

