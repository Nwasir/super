const url = "https://run.mocky.io/v3/78e95997-f1be-4719-a0a5-036fb2c5af67";

export async function fetchImages() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(url);
      return data.images;
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  }
  
  export function initializeAnimation(images) {
    const animationContainer = document.querySelector("#animation");
    let currentIndex = 0;
  
    images.forEach((imageUrl, index) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = `Image ${index + 1}`;
      img.classList.add("image");
      if (index === 0) {
        img.classList.add("active");
      }
      animationContainer.appendChild(img);
    });
  
    function showImage(index) {
      const imageElements = document.querySelectorAll(".image");
      imageElements.forEach((image, i) => {
        if (i === index) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });
    }
  
    function nextImage() {
      currentIndex = Math.floor(Math.random() * images.length);
      showImage(currentIndex);
    }
  
    // Set interval to change image every 3 seconds
    setInterval(nextImage, 3000);
  }
  