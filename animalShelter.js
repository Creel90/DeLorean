const petTypes = ['Dog', 'Cat', 'Rabbit', 'Fox'];
const petsList = document.getElementById('pets');
const cartList = document.getElementById('cart');
const noPetsPar = document.getElementById('no-pets');
const removePetButton = document.getElementById('remove-pet');
let cart = [];

function updateCart() {
    cartList.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement('li');
        li.textContent = cart[i];
        cartList.appendChild(li);
    }
    if (cart.length === 0) {
        noPetsPar.style.display = 'block';
    } else {
        noPetsPar.style.display = 'none';
    }
}

for (let i = 0; i < petTypes.length; i++) {
    const pet = petTypes[i];
    const li = document.createElement('li');
    li.textContent = pet + ' ';
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.setAttribute('data-item', pet);
    addButton.addEventListener('click', function() {
        cart.push(pet);
        updateCart();
    });
    li.appendChild(addButton);
    petsList.appendChild(li);
}

removePetButton.addEventListener('click', function() {
    if (cart.length > 0) {
        cart.pop();
        updateCart();
    }
});

updateCart();