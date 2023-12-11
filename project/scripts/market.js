import { displayItems, getItems } from "./marketFunctions.js";
import { setCartCountElement, updateCartCount } from "./cart-icon.js";
import { addToCart } from "./add-to-cart.js";

// Declare and initialize global variables
const myOutfit = document.querySelector("#outfit");
const cartCountElement = document.querySelector("#cart-count");
const cartIconContainer = document.querySelector("#cart-icon-container");
const url = "../json/collection.json";

// Set the cart count element
setCartCountElement(cartIconContainer, cartCountElement);

// Main function
async function initializeMarket() {
  const data = await getItems(url);
  if (data) {
    displayItems(data, myOutfit);
  }
}

// Example: Adding a product to the cart
document.addEventListener("DOMContentLoaded", () => {
  // Add a click event listener to each product item to add it to the cart
  myOutfit.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("product-item")) {
      const productId = target.dataset.productId;
      const productName = target.dataset.productName;
      const productPrice = target.dataset.productPrice;
      const product = { id: productId, name: productName, price: productPrice };
      addToCart(product);
    }
  });

  // Call the main function
  initializeMarket();
});
