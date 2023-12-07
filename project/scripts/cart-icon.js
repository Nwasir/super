// cartIcon.js

let cartIconElement = null;

function setCartIcon(element) {
    cartIconElement = element;
}

function updateCartIcon(count) {
    if (cartIconElement) {
        // Update the cart icon dynamically
        const cartIconImage = document.createElement("img");
        cartIconImage.src = "images/cart.png";
        cartIconImage.alt = "cart logo";
        cartIconImage.width = 50;
        cartIconImage.height = 50;

        // Update the cart count
        const cartCount = document.createElement("span");
        cartCount.textContent = count > 0 ? ` (${count})` : "";

        // Clear the existing content and append the updated content
        cartIconElement.innerHTML = "";
        cartIconElement.appendChild(cartIconImage);
        cartIconElement.appendChild(cartCount);
    }
}

// Export functions
export { setCartIcon, updateCartIcon };
