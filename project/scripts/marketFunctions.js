// marketFunctions.js
import { addToCart, setCartIconCallback } from "./add-to-cart.js";
import { updateCartIcon } from "./cart-icon.js";

async function displayItems(data, container) {
    data.clothing.forEach((item) => {
        const section = document.createElement("section");
        const link = document.createElement("a");
        link.href = item.purchaseLink;

        link.addEventListener("click", (event) => {
            event.preventDefault();
            addToCart(item);
        });


        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const h5 = document.createElement("h5");
        const images = document.createElement("img");
        //const buyLink = document.createElement("a");

        images.setAttribute("src", item.images);
        images.setAttribute("alt", item.name);
        h3.textContent = item.name;
        h4.textContent = `Price: ${item.prices}`;
        h5.textContent = `Size: ${item.sizes}`;

        link.appendChild(h3);
        link.appendChild(images);
        link.appendChild(h4);
        link.appendChild(h5);
        //link.appendChild(buyLink);

        section.appendChild(link);
        container.appendChild(section);
    });
}

async function getItems(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Failed to fetch data");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

// Export functions
export { displayItems, getItems };
setCartIconCallback(updateCartIcon);
