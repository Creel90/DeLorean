const menuItems = document.getElementById("menu");
const cartItems = document.getElementById("cart");
const noItems = document.getElementById("no-items");
const removeButton = document.getElementById("remove-item");

const items = ["Hamburger", "Cheeseburger", "Fries", "Onion Rings"];
const cart = [];

function displayNoItemText() {
    if (cart.length == 0){
        noItems.style.display = "block";
    }
    else noItems.style.display = "none";
}

function updateCart() {
    cartItems.innerHTML = "";
    for(let i = 0; i < cart.length; i++){
        cartItems.innerHTML += "<li>" + cart[i] + "</li>";
    }
    displayNoItemText();
}

function addItem(e) {
    cart.push(e.target.dataset.name);
    updateCart();
}

function removeItem() {
    cart.shift();
    updateCart();
}

for(let i = 0; i < items.length; i++){
    const newLi = document.createElement("li");
    newLi.innerText = items[i];

    const newButton = document.createElement("button");
    newButton.innerText = "+";
    newButton.dataset.name = items[i];
    newButton.onclick = addItem;
    newLi.appendChild(newButton);

    menuItems.appendChild(newLi);
}

removeButton.onclick = removeItem; 