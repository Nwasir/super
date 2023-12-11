// scripts/summary.js
import { getCartFromLocalStorage } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    const selectedItemsList = document.getElementById("selected-items-list");
    const totalPriceElement = document.getElementById("total-price");
    const purchaseButton = document.getElementById("purchase-button");

    // Calculate and display the total prices of selected items
    calculateTotalPrice(selectedItemsList, totalPriceElement);

    // Add click event listener to the purchase button
    purchaseButton.addEventListener("click", handlePurchaseButtonClick);
});

function calculateTotalPrice(selectedItemsList, totalPriceElement) {
    const cart = getCartFromLocalStorage();

    if (cart.length === 0) {
        selectedItemsList.innerHTML = "<p>No items selected.</p>";
        totalPriceElement.textContent = "Total Price: $0.00";
    } else {
        let total = 0;

        const itemList = document.createElement("ul");

        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name}: $${item.prices.toFixed(2)}`;
            total += item.prices;
            itemList.appendChild(listItem);
        });

        selectedItemsList.appendChild(itemList);
        totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }
}
function handlePurchaseButtonClick() {
    // Redirect to the order form page
    window.location.href = "order-form.html";
}
