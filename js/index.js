let balance = 5500;
const donationTab = document.getElementById('donationTab');
const historyTab = document.getElementById('historyTab');
const donationSection = document.getElementById('donationSection');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');

// Toggle Tabs Section
donationTab.addEventListener('click', function (event) {
    event.preventDefault();
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

});

historyTab.addEventListener('click', function (event) {
    event.preventDefault();
    donationSection.classList.add('hidden');
    historySection.classList.add('hidden');
});

// Handle Donation section

function donate(cardId) {
    const inputId = `donationInput${cardId}`;
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please Enter A Valid Donation Amount..!");
        return;
    }
    // update section of total donation amount
    totalDonation += amount;

    // add to donation history 
    const newHistoryItem = document.createElement('li');
    newHistoryItem.textContent = `Donated${amount} BDT To Card ${cardId}`;
    historyList.appendChild(newHistoryItem);
    // here clearing input
    input.value = '';

    // updated total donation in navbar section
    document.querySelector('.text-green-500').textContent = `${totalDonation} BDT`;
    alert("Thank You For Donation");
}
