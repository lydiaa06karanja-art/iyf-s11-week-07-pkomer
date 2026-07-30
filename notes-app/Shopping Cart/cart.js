const productList = document.getElementById("product-list");

const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");

const clearCart= document.getElementById("clear-cart");


const state = {

    products: [

        { 
            
           id: 1, 

           name: "Laptop",

           price: 999, 

           image: "laptop.jpg" 
    
        },

        { 
            
            id: 2, 
            name: "Phone", 

            price: 699, 

            image: "phone.jpg" },

        { id: 3, 
            name: "Headphones",

            price: 199, 

            image: "headphones.jpg"
        
        }
    ],

    cart: [] 
};

function addToCart(productId) {

    const existing = state.cart.find(item => item.productId === productId);
    
    if (existing) {

        existing.quantity++;

    } else {

        state.cart.push({ productId, quantity: 1 });

    }
    
    saveCart();

    displayCart();
}

function renderProducts() {

    productList.innerHTML = "";

    state.products.forEach(product => {

        const productCard = document.createElement("div");

        productCard.innerHTML = `

        <h3>${product.name}</h3>

        <img src="${product.image}"

             alt="${product.name}"

             width="150">

        <p>Price: $${product.price}</p>

        <button onClick="window.addToCart(${product.id})">
        
           Add to Cart
        
        </button>
    `;
     productList.appendChild(productCard);

    });
}

function displayCart() {

    cartItems.innerHTML = "";

    state.cart.forEach(item => {

        const product = state.products.find(

            product => product.id === item.productId

        );

        const cartCard = document.createElement("div")
        
        cartCard.innerHTML = `

        <h3>${product.name}</h3>

        <img src="${product.image}"

             alt="${product.name}"

             width="100"></img>

        <p>Price: $${product.price}</p>

        <p>Quantity: ${item.quantity}</p>


        <button onClick="window.updateQuantity(${product.id}, ${item.quantity + 1})">
            +

        </button>

        <button onClick="window.updateQuantity(${product.id}, ${item.quantity - 1})">
            -
         </button>
         
         <button onClick="window.removeFromCart(${product.id})">
           
           Remove
        
        </button>
    `;

    cartItems.appendChild(cartCard);

    });

    cartTotal.textContent = getCartTotal();

    cartCount.textContent = getCartCount();
     
     
}

function updateQuantity(productId, quantity) {
   
    const item = state.cart.find(

            item => item.productId === productId
    );

    if (item) {

        if (quantity <= 0) {

            removeFromCart(productId);

        } else {

            item.quantity = quantity;
        
        }
    }   

        saveCart();

        displayCart();
}

function removeFromCart(productId) {
   
    state.cart = state.cart.filter(

        item => item.productId !== productId
    
    );

    saveCart();

    displayCart();


}

function saveCart(){

    localStorage.setItem(

        "cart",

        JSON.stringify(state.cart)

    );
}

function loadCart() {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

        state.cart = JSON.parse(savedCart);
    }
}


function getCartTotal() {

    return state.cart.reduce((total, item) => {

        const product = state.products.find(
            
            p => p.id === item.productId);

        return total + (product.price * item.quantity);

    }, 0);

}



function getCartCount() {

    return state.cart.reduce((count, item) => count + item.quantity, 0);

}

clearCart.addEventListener("click", () => {

    state.cart = [];

    saveCart();

    displayCart();
});

window.addToCart = addToCart;

window.updateQuantity = updateQuantity;

window.removeFromCart = removeFromCart;

loadCart();

renderProducts();

displayCart();