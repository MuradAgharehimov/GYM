const div = document.getElementById("productsList");
const loadMoreBtn = document.getElementById("pagi");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let page = 1;
let limit = 3;
let db = [];

async function getProducts() {
    let skip = (page - 1) * limit;

    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data;

        data.forEach(item => {
            const box = document.createElement("div");
            box.className = "boxDiv";
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p class="title">${item.title}</p>
                <button onclick="addToBasket(${item.id})">Add to basket</button>
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

loadMoreBtn.addEventListener('click', getProducts);

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItem = db.find(item => item.id == id);
    cart.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = () => {
    getProducts();
};

function getbyname() {
    abcd.innerHTML = ``
    abc.style.display='none'
    abcd.style.display='block'

    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res => {
        db = res.data
        let sortedData = db.sort((a, b) => a.price - b.price)      
        sortedData.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>
            <p>${item.price}</p>`
            abcd.append(div)
        })

    })
}

searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = db.filter(item => item.title.toLowerCase().includes(searchTerm));

    div.innerHTML = '';


    filteredData.forEach(item => {
        const box = document.createElement("div");
        box.className = "boxDiv";
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p class="title">${item.title}</p>
            <button onclick="addToBasket(${item.id})">Add to basket</button>
        `;
        div.appendChild(box);
    });
});
