
/* Declare and initialize global variables */
const myOutfit = document.querySelector("#outfit");

let clothingList = [];

/* async displayTemples Function */
function displayItems(data) {
    data.clothing.forEach((items) => {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const images = document.createElement("img");
        images.setAttribute("src", items.images);
        images.setAttribute("alt", items.name);
        h3.textContent = items.name;
        h4.textContent = items.prices;
        h4.textContent = items.sizes;

        section.appendChild(h3);
        section.appendChild(images);
        section.appendChild(h4);

        myOutfit.appendChild(section);
    });
};

url = "../json/collection.json"
// url = "https://run.mocky.io/v3/78e95997-f1be-4719-a0a5-036fb2c5af67";
async function getItmes() {
    let response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        displayItems(data);
    }

    console.log(response);
};

/* reset Function */
const reset = () => {
    myOutfit.innerHTML = "";
};

/* sortBy Function */

function sortBy(items) {
    reset();

    const filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "shirt":
            displayItems(filterItems(items, "shirts"));
            break;

        case "suit":
            displayItems(filterItems(items, "suit"));
            break;

        case "agbada":
            displayItems(filterItems(items, "agbada"));
            break;

        case "trousers":
            displayItems(filterItems(items, "trousers"));
            break;

        case "senator":
            displayItems(filterItems(items, "senator"));
            break;

        case "shoes":
            displayItems(filterItems(items, "shoes"));
            break;

        case "all":
            displayItems(items);
            break;
    }
}

function filterItems(items, keyword) {
    return items.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()));

};
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(clothingList);
});

getItmes();
