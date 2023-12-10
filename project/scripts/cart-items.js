// cartItems.js

import { getCartFromLocalStorage } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    const cartItemsList = document.querySelector("#cart-items-list");

    // Display the list of selected items when the page loads
    displayCartItems();

    function displayCartItems() {
        const cart = getCartFromLocalStorage();

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<p>Your cart is empty. Add items to view them here.</p>";
        } else {
            const itemList = document.createElement("ul");

            cart.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item.name;
                // You can add more details (e.g., prices, quantities, etc.) to the list item as needed.
                itemList.appendChild(listItem);
            });

            cartItemsList.appendChild(itemList);
        }
    }
});
