import { getCartFromLocalStorage, saveCartToLocalStorage } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.querySelector("#cart-items-list");
  const clearCartButton = document.querySelector("#clear-cart");
  const placeOrderButton = document.querySelector("#place-order");

  // Display the list of selected items when the page loads
  displayCartItems();

  function displayCartItems() {
    const cart = getCartFromLocalStorage();

    if (cart.length === 0) {
      cartItemsList.innerHTML =
        "<p>Your cart is empty. Add items to view them here.</p>";
    } else {
      const itemList = document.createElement("ul");

      cart.forEach((item) => {
        const listItem = document.createElement("li");

        const itemDetails = document.createElement("div");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemImage = document.createElement("img");
        itemImage.src = item.images;
        itemImage.alt = item.name;

        const itemPrice = document.createElement("h4");
        itemPrice.textContent = `Price: ${item.prices}`;

        const itemSize = document.createElement("h5");
        itemSize.textContent = `Size: ${item.sizes}`;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemImage);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemSize);

        listItem.appendChild(itemDetails);
        itemList.appendChild(listItem);
      });

      cartItemsList.appendChild(itemList);
    }
  }
  //Add event listeners for Clear Cart and Place Order buttons
  clearCartButton.addEventListener("click", clearCart);
  placeOrderButton.addEventListener("click", placeOrder);

  function clearCart() {
    // Clear the cart in localStorage and refresh the page
    saveCartToLocalStorage([]);
    location.reload();
  }

  function placeOrder() {
    // Redirect to the order form page
    window.location.href = "summary.html";
  }
});
