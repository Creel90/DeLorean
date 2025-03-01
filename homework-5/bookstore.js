const booksList = document.getElementById("books");
const cartList = document.getElementById("cart");
const removeButton = document.getElementById("remove-book");
const noBooksparagraph = document.getElementById("no-books");

const availableBooks = [
  "Hop on Pop",
  "Fox in Socks",
  "The Cat in the Hat",
  "A Fly Went By",
];

let cart = [];

availableBooks.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = book;

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.setAttribute("data-item", book);

  addButton.addEventListener("click", () => {
    cart.push(book);
    updateCart();
  });

  li.appendChild(addButton);
  booksList.appendChild(li);
});

function updateCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    noBooksparagraph.style.display = "block";
  } else {
    noBooksparagraph.style.display = "none";
  }
  cart.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book;
    cartList.appendChild(li);
  });
}

removeButton.addEventListener("click", () => {
  if (cart.length > 0) {
    cart.pop();
    updateCart();
  }
});
