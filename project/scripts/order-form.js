// scripts/order-form.js
document.addEventListener("DOMContentLoaded", () => {
    const submitOrderButton = document.querySelector("#submit");

    if (submitOrderButton) {
        submitOrderButton.addEventListener("click", validateAndSubmitForm);
    }
});

function validateAndSubmitForm(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    const creditCard = document.querySelector('#credit-card').value;
    const expiryDate = document.querySelector('#expiry-date').value;

    // Basic form validation
    if (name.trim() === '' || email.trim() === '' || address.trim() === '' || creditCard.trim() === '' || expiryDate.trim() === '') {
        alert('All fields are required. Please fill out the form completely.');
        return;
    }

    // Credit card validation
    if (!isValidCreditCard(creditCard)) {
        alert('Please enter a valid credit card number.');
        return;
    }

    // Expiry date validation
    if (!isValidExpiryDate(expiryDate)) {
        alert('Please enter a valid expiry date (MM/YYYY).');
        return;
    }

    // If the form is valid, submit the form and redirect to success.html
    alert('Form is valid. Submitting order!');
    
    // Redirect to success.html
    window.location.href = 'success.html';
}

