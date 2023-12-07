// storage.js

const CART_KEY = "cart";

function getCartFromLocalStorage() {
    const cartJson = localStorage.getItem(CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
}

function saveCartToLocalStorage(cart) {
    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJson);
}

// Export functions
export { getCartFromLocalStorage, saveCartToLocalStorage };

// // details.js

// // This file is used to export the saveDetails function
// export function saveDetails(itemName, price, size) {
//     const details = {
//         itemName: itemName,
//         price: price,
//         size: size
//     };

//     localStorage.setItem('selectedDetails', JSON.stringify(details));
//     alert('Details saved to local storage: ' + JSON.stringify(details));
// }
