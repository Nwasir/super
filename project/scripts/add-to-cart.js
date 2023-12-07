import { getCartFromLocalStorage, saveCartToLocalStorage } from "./storage";

let cart = [];
let cartIconCallback = null;

function setCartIconCallback(callback) {
    cartIconCallback = callback;
}

function addToCart(item) {
    cart.push(item);
    console.log(`Added "${item.name}" to the cart.`);
    if (cartIconCallback) {
        cartIconCallback(cart.length);
    }
}

function getCart() {
    return cart;
}

// Export functions
export { addToCart, getCart, setCartIconCallback };
