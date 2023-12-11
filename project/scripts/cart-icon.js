import { getCartFromLocalStorage } from "./storage.js";

let cartCountElement = null;
let cartIconElement = null;

function setCartCountElement(element, countElement) {
  cartIconElement = element;
  cartCountElement = countElement;

  // Add a click event listener to navigate to the cart page
  if (cartIconElement) {
    cartIconElement.addEventListener("click", handleCartIconClick);
  }
}

function updateCartCount() {
  const cart = getCartFromLocalStorage();
  const count = cart.length;

  if (cartIconElement && cartCountElement) {
    // Update the cart icon dynamically
    // const cartIconImage = document.createElement("img");
    const cartIconImage = document.getElementById("cart-icon-image");
    // cartIconImage.src = "images/cart.png";
    // cartIconImage.alt = "cart logo";
    // cartIconImage.width = 50;
    // cartIconImage.height = 50;

    // Update the cart count
    cartCountElement.textContent = count;

    // Clear the existing content and append the updated content
    cartIconElement.innerHTML = "";
    // cartIconElement.appendChild(cartIconImage);
    cartIconElement.appendChild(cartCountElement);
  }
}
function handleCartIconClick() {
  // Navigate to the cart items page
  window.location.href = "cart-items.html";
}

// Export functions
export { setCartCountElement, updateCartCount };

