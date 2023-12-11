  // Array of image sources
  const images = [
    "images/agbada1.jpg",
    "images/agbada8.jpg",
    "images/shirt1.jpg",
    "images/shirt9.jpg",
    "images/suit1.jpg",
    "images/suit7.jpg",
    "images/shoe6.jpg",
    "images/shoe1.jpg",
    "images/trousers2.jpg",
    "images/trousers7.jpg"
];

const animationElement = document.getElementById("animation");

// Function to get a random image from the array
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Function to update the image source in the animation div
function updateAnimation() {
    const randomImage = getRandomImage();
    animationElement.innerHTML = `<img src="${randomImage}" alt="animation">`;
}

// Function to start the image animation
function startImageAnimation(intervalTime = 2000) {
    setInterval(updateAnimation, intervalTime);
}

// Start the image animation
startImageAnimation();