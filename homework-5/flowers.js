const flowersList = document.getElementById("flowers"),
      cartList = document.getElementById("cart"),
      noFlowersMessage = document.getElementById("no-flowers"),
      removeFlowerButton = document.getElementById("remove-flower");

const availableFlowers = ["Rose", "Tulip", "Daisy", "Lily"];
let cart = [];

flowersList.innerHTML = availableFlowers.map(flower => 
    `<li>${flower} <button onclick="addToCart('${flower}')">+</button></li>`
).join("");

const updateCart = () => {
    cartList.innerHTML = cart.map(item => `<li>${item}</li>`).join(""); 
    noFlowersMessage.style.display = cart.length ? "none" : "block";
};

const addToCart = flower => (cart.push(flower), updateCart());

removeFlowerButton.onclick = () => (cart.pop(), updateCart());

updateCart();

