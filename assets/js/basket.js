const div = document.getElementById('productsListx');

  function getProducts() {
    div.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayProducts(cart);
  }

  function sortProducts(order) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (order === 'asc') {
      cart.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      cart.sort((a, b) => b.price - a.price);
    }

    displayProducts(cart);
  }

  function displayProducts(products) {
    products.forEach((item, index) => {
      const box = document.createElement('div');
      box.className = 'boxDiv';
      box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>
      `;
      div.appendChild(box);
    });
  }

  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getProducts();
  }

  getProducts();