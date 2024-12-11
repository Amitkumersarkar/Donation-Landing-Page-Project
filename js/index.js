const donationSection = document.getElementById('donationSection');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');
const balanceElement = document.getElementById('balance');
let balance = 5500;

document.getElementById('donationTab').addEventListener('click', () => {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});

document.getElementById('historyTab').addEventListener('click', () => {
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
});

function donate(id, baseAmount) {
    const input = document.getElementById(`donation${id}`);
    const amount = parseInt(input.value) || baseAmount;
    if (amount > 0 && amount <= balance) {
        const historyItem = document.createElement('li');
        historyItem.textContent = `${amount} BDT donated for cause #${id}`;
        historyList.appendChild(historyItem);
        balance -= amount;
        balanceElement.textContent = `${balance} BDT`;
        alert(`Thank you for donating ${amount} BDT!`);
    } else if (amount > balance) {
        alert('Insufficient balance to complete the donation.');
    } else {
        alert('Please enter a valid amount.');
    }
    input.value = '';
}