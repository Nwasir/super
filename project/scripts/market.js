
import { displayItems, getItems } from "./marketFunctions.js";
import { setCartCountElement, updateCartCount } from "./cart-icon.js";

// Declare and initialize global variables
const myOutfit = document.querySelector("#outfit");
const cartCountElement = document.querySelector("#cart-count");
const url = "../json/collection.json";

// Set the cart count element
setCartCountElement(cartCountElement);

// Main function
async function initializeMarket() {
    const data = await getItems(url);
    if (data) {
        displayItems(data, myOutfit);
    }
}

// Call the main function
initializeMarket();

// Example: Log the cart contents
//console.log("Cart Contents:", getCart());

// // market.js
// import { displayItems, getItems } from "./marketFunctions.js";

// // Declare and initialize global variables
// const myOutfit = document.querySelector("#outfit");
// const url = "../json/collection.json";

// // Main function
// async function initializeMarket() {
//     const data = await getItems(url);
//     if (data) {
//         displayItems(data, myOutfit);
//     }
// }

// // Call the main function
// initializeMarket();

