// itemDisplayer.js
export function displayItems(data, targetElement) {
    const myOutfit = document.querySelector(targetElement);
    myOutfit.innerHTML = '';
  
    data.clothing.forEach((item) => {
      const section = document.createElement('section');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h4');
      const images = document.createElement('img');
  
      images.setAttribute('src', item.images);
      images.setAttribute('alt', item.name);
  
      h3.textContent = item.name;
      h4.textContent = `Price: ${item.prices}, Sizes: ${item.sizes}`;
  
      section.appendChild(h3);
      section.appendChild(images);
      section.appendChild(h4);
  
      myOutfit.appendChild(section);
    });
  }
  
export async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  