// Product Array
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 },
  { name: "Mouse", price: 50 }
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

// Render products
function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="name">${product.name}</span>
      <span class="price">$${product.price}</span>
    `;
    productList.appendChild(li);
  });
}

// Filter products
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm)
  );

  // Sort products
  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortSelect.value === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
sortSelect.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
