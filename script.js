function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
  }
  function toggleWishlist() {
    document.getElementById("wishlist-sidebar").classList.toggle("active");
  }
  
  function closeWishlist() {
    document.getElementById("wishlist-sidebar").classList.remove("active");
  }
  
  // Example function to add an item
  function addToWishlist(itemName) {
    const ul = document.getElementById("wishlist-items");
    const li = document.createElement("li");
    li.innerText = itemName;
    ul.appendChild(li);
  }
  function addToWishlist(name, price) {
    const ul = document.getElementById("wishlist-items");
    const li = document.createElement("li");
    li.textContent = `${name} - Rs.${price}`;
    ul.appendChild(li);
  
    // Optional: Open the sidebar automatically
    document.getElementById("wishlist-sidebar").classList.add("active");
  }
 function addToCart(name, price, imgSrc) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, imgSrc });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}



    

  