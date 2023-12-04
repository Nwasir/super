// details.js

// This file is used to export the saveDetails function
export function saveDetails(itemName, price, size) {
    const details = {
        itemName: itemName,
        price: price,
        size: size
    };

    localStorage.setItem('selectedDetails', JSON.stringify(details));
    alert('Details saved to local storage: ' + JSON.stringify(details));
}
