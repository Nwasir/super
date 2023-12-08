// addToCart.js

import { getCartFromLocalStorage, saveCartToLocalStorage } from "./storage.js";
import { updateCartCount } from "./cart-icon.js";

let cart = getCartFromLocalStorage();

function addToCart(item) {
    cart.push(item);
    console.log(`Added "${item.name}" to the cart.`);
    saveCartToLocalStorage(cart);

    // Trigger cart count update
    updateCartCount();
}

function getCart() {
    return cart;
}

// Export functions
export { addToCart, getCart };



// import { getCartFromLocalStorage, saveCartToLocalStorage } from "./storage.js";

// let cart = getCartFromLocalStorage();
// let cartIconCallback = null;

// function setCartIconCallback(callback) {
//     cartIconCallback = callback;
// }

// function addToCart(item) {
//     cart.push(item);
//     console.log(`Added "${item.name}" to the cart.`);
//     saveCartToLocalStorage(cart);

//     if (cartIconCallback) {
//         cartIconCallback(cart.length);
//     }
// }

// function getCart() {
//     return cart;
// }

// // Export functions
// export { addToCart, getCart, setCartIconCallback };
