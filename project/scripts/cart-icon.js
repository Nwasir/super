
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
        const cartIconImage = document.createElement("img");
        cartIconImage.src = "images/cart.png"; // Replace with the actual path to your cart icon
        cartIconImage.alt = "cart logo";
        cartIconImage.width = 50;
        cartIconImage.height = 50;

        // Update the cart count
        cartCountElement.textContent = count;

         // Clear the existing content and append the updated content
        cartIconElement.innerHTML = "";
        cartIconElement.appendChild(cartIconImage);
        cartIconElement.appendChild(cartCountElement);
    }
}
function handleCartIconClick() {
    // Increment the cart count when the cart icon is clicked
    const cart = getCartFromLocalStorage();
    cart.push({ name: "Sample Item" }); // Add a sample item, you can modify this based on your actual items
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart icon
    updateCartCount();

    // Navigate to the cart items page
    window.location.href = "cartItems.html";
}

// Export functions
export { setCartCountElement, updateCartCount };



// import { getCartFromLocalStorage } from "./storage.js";

// let cartIconElement = null;
// let cartCountElement = null;

// function setCartIcon(element, countElement) {
//     cartIconElement = element;
//     cartCountElement = countElement;
//     updateCartIcon();
// }

// function updateCartIcon(count) {
//     const cart = getCartFromLocalStorage();
//     count = cart.length;
//     if (cartIconElement && cartCountElement) {
//         // Update the cart icon dynamically
//         const cartIconImage = document.createElement("img");
//         cartIconImage.src = "images/cart.png"; 
//         cartIconImage.alt = "cart logo";
//         cartIconImage.width = 50;
//         cartIconImage.height = 50;

//         // Update the cart count
//         cartCountElement.textContent = count;

//         // Clear the existing content and append the updated content
//         cartIconElement.innerHTML = "";
//         cartIconElement.appendChild(cartIconImage);
//         cartIconElement.appendChild(cartCountElement);
//     }
// }
// // Export functions
// export { setCartIcon, updateCartIcon };

// import { getCartFromLocalStorage } from "./storage.js";

// let cartIconElement = null;

// function setCartIcon(element) {
//     cartIconElement = element;
// }

// function updateCartIcon(count) {
//     if (cartIconElement) {
//         // Update the cart icon dynamically
//         const cart = document.querySelector("#cart-icon")
//         const cartIconImage = document.createElement("img");
//         cartIconImage.src = "images/cart.png"; // Replace with the actual path to your cart icon
//         cartIconImage.alt = "cart logo";
//         cartIconImage.width = 50;
//         cartIconImage.height = 50;

//         // Update the cart count
//         // const cartCount = document.createElement("span");
        
//         cartCount.textContent = count > 0 ? ` (${count})` : "";

//         // Append the updated content
//         cartIconImage.appendChild(cartCount);

//         // Clear the existing content and append the updated content
//         cartIconElement.innerHTML = "";
//         cartIconElement.appendChild(cartIconImage);
//     }
// }

// // Initial update when the page loads
// updateCartIcon(getCartFromLocalStorage().length);

// // Export functions
// export { setCartIcon, updateCartIcon };

// // cartIcon.js

// let cartIconElement = null;

// function setCartIcon(element) {
//     cartIconElement = element;
// }

// function updateCartIcon(count) {
//     if (cartIconElement) {
//         // Update the cart icon dynamically
//         const cartIconImage = document.createElement("img");
//         cartIconImage.src = "images/cart.png";
//         cartIconImage.alt = "cart logo";
//         cartIconImage.width = 50;
//         cartIconImage.height = 50;

//         // Update the cart count
//         const cartCount = document.createElement("span");
//         cartCount.textContent = count > 0 ? ` (${count})` : "";

//         // Clear the existing content and append the updated content
//         cartIconElement.innerHTML = "";
//         cartIconElement.appendChild(cartIconImage);
//         cartIconElement.appendChild(cartCount);
//     }
// }

// // Export functions
// export { setCartIcon, updateCartIcon };
