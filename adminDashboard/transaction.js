document.addEventListener('DOMContentLoaded', () => {
    loadTransactionList();
});

function loadTransactionList() {
    // Replace with your logic to load transactions from server
    const transactions = [
        { id: 1, email: 'user1@example.com', status: 'New' },
        { id: 2, email: 'user2@example.com', status: 'New' },
        { id: 3, email: 'user3@example.com', status: 'Validated' }
    ];

    const table = document.getElementById('transactionTable');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            ${transactions.map(t => `
                <tr onclick="showTransactionDetails(${t.id})">
                    <td>${t.id}</td>
                    <td>${t.email}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

function showTransactionDetails(id) {
    const detailsContent = document.getElementById('detailsContent');
    const transaction = getTransactionDetails(id);

    detailsContent.innerHTML = `
        <p><strong>Transaction ID:</strong> ${id}</p>
        <p><strong>Email:</strong> ${transaction.email}</p>
        <p><strong>Amount:</strong> $${transaction.amount}</p>
        <p><strong>Status:</strong> ${transaction.status}</p>
        <p><strong>Payment Method:</strong> ${transaction.method}</p>
        <div id="paymentProof" ${transaction.status === 'Validated' ? '' : 'style="display:none;"'}>
            <p><strong>Proof of Payment:</strong></p>
            <img src="${transaction.proofImage}" alt="Receipt Image">
        </div>
        ${transaction.status === 'New' ? '<button onclick="validateTransaction(' + id + ')">Validate</button>' : ''}
    `;
}

function validateTransaction(id) {
    // Simulate validating the transaction
    alert(`Transaction ID ${id} validated.`);
    updateTransactionStatus(id, 'Validated');
}

function getTransactionDetails(id) {
    // Simulate getting transaction details
    const transactions = {
        1: { email: 'user1@example.com', amount: 100, status: 'New', method: 'PayPal', proofImage: '' },
        2: { email: 'user2@example.com', amount: 150, status: 'New', method: 'Bitcoin', proofImage: '' },
        3: { email: 'user3@example.com', amount: 200, status: 'Validated', method: 'PayPal', proofImage: 'Image/receipt3.png' }
    };
    return transactions[id];
}

function updateTransactionStatus(id, status) {
    // Simulate updating the transaction status
    console.log(`Transaction ID ${id} status updated to ${status}`);
    loadTransactionList(); // Refresh the list
}
