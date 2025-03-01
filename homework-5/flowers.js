// References to HTML elements
const flowersList = document.getElementById("flowers"),
      cartList = document.getElementById("cart"),
      noFlowersMessage = document.getElementById("no-flowers"),
      removeFlowerButton = document.getElementById("remove-flower");

const availableFlowers = ["Rose", "Tulip", "Daisy", "Lily"];
let cart = [];

// Display available flowers
flowersList.innerHTML = availableFlowers.map(flower => 
    `<li>${flower} <button onclick="addToCart('${flower}')">+</button></li>`
).join("");

// Update cart display
const updateCart = () => {
    cartList.innerHTML = cart.map(item => `<li>${item}</li>`).join(""); // Ensures correct display
    noFlowersMessage.style.display = cart.length ? "none" : "block";
};

// Add flower to cart
const addToCart = flower => (cart.push(flower), updateCart());

// Remove last flower from cart
removeFlowerButton.onclick = () => (cart.pop(), updateCart());

// Initialize cart display
updateCart();

