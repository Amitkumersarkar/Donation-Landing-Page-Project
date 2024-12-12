const donationSection = document.getElementById('donation-Section');
const historySection = document.getElementById('history-Section');
const historyList = document.getElementById('history-List');
const currentBalance = document.getElementById('balance');

let balance = 5500;
document.getElementById('donationTab').addEventListener('clcik', function (event) {
    event.preventDefault();
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});