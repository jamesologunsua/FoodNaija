const foodData = [
    {
        id: 1,
        name: "Pounded Yam with Egusi Soup",
        description: "Egusi soup and pounded yam",
        price: 12.99,
        image: "https://media.istockphoto.com/id/498310978/photo/egusi-soup-and-pounded-yam-nigerian-cuisine.jpg?s=612x612&w=0&k=20&c=7TmkO_7Nx12PpXqWQpPUUWEuxjY6qX4ITdBVBFxfHuA=",
        category: "dinner",
        rating: 4.5,
        featured: true
    },
    {
        id: 2,
        name: "Jollof Rice",
        description: "Jollof rice with fried chicken",
        price: 10.99,
        image: "https://media.istockphoto.com/id/1057435248/photo/jollof-rice-with-fried-chicken-wings-close-up-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=1kT4O5aUXHtgWf4Tsa9UdBVdf6qYcgeZpdhwJuigA0E=",
        category: "lunch",
        rating: 4.2,
        featured: true
    },
    {
        id: 3,
        name: "Beans Pottage",
        description: "Brown beans pottage(Ewa Agoyin) with plantain",
        price: 14.99,
        image: "https://media.istockphoto.com/id/990017916/photo/nigerian-brown-beans-pottage-with-plantain.jpg?s=612x612&w=0&k=20&c=oz8x-JNrKS4xMC8lRDffOdfmcN9Rbmr3x2Lk14KLCCs=",
        category: "dinner",
        rating: 4.7,
        featured: true
    },
    {
        id: 4,
        name: "Grilled Fish",
        description: "Grilled fish with fried plantain and sauce",
        price: 6.99,
        image: "https://media.istockphoto.com/id/1219948971/photo/african-national-food-dish-nigerian-grilled-meat-and-chicken-dish.jpg?s=612x612&w=0&k=20&c=5pLthw6sj6b0xUNwx0P_CejMren0VEUPxBl9ZH-Dekg=",
        category: "dessert",
        rating: 4.8,
        featured: false
    },
    {
        id: 5,
        name: "Akara",
        description: "Freshly fried akara",
        price: 13.99,
        image: "https://media.istockphoto.com/id/975572398/photo/nigerian-akara-bean-cake-ready-to-serve.jpg?s=612x612&w=0&k=20&c=vOkP0kBsD_8g2ztbNfGd75zML-CXwE48pn3x-fmJ-hg=",
        category: "breakfast",
        rating: 4.4,
        featured: false
    },
    {
        id: 6,
        name: "Acaraje Dumpling",
        description: "Acaraje dumpling made with black-eyed pea dough, shrimp and onion",
        price: 9.99,
        image: "https://media.istockphoto.com/id/1771699447/photo/acaraje-dumpling-made-with-black-eyed-pea-dough-shrimp-onion-and-salt-and-fried-in-palm-oil.jpg?s=612x612&w=0&k=20&c=SOPp-6TXak4VKJ1jMW0lyNJBgj0J54sBswvqlXu-mKA=",
        category: "dessert",
        rating: 4.1,
        featured: false
    },
    {
        id: 7,
        name: "Sushi Platter",
        description: "Assortment of fresh sushi including salmon, tuna, and California rolls",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=627&q=80",
        category: "asian",
        rating: 4.9,
        featured: true
    },
    {
        id: 8,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80",
        category: "drink",
        rating: 4.3,
        featured: false
    }
];



class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }


    init() {
        this.updateCartCount();
        this.setupEventListeners();
    }


    addItem(itemId, quantity = 1) {
        const food = foodData.find(item => item.id === itemId);
        if (!food) return;


        const existingItem = this.cart.find(item => item.id === itemId);
    
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: food.id,
                name: food.name,
                price: food.price,
                image: food.image,
                quantity: quantity
            });
        }
    
        this.saveCart();
        this.updateCartCount();
        this.showSuccessMessage(`${food.name} added to cart!`);
    }


    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartCount();
        this.showSuccessMessage('Item removed from cart');
    }


    updateQuantity(itemId, change) {
        const item = this.cart.find(item => item.id === itemId);
    
        if (item) {
            item.quantity += change;
        
            if (item.quantity <= 0) {
                this.removeItem(itemId);
            } else {
                this.saveCart();
                this.updateCartCount();
            }
        }
    }


    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }


    getSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }


    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }


    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }
    }


    showSuccessMessage(message) {
        let successMessage = document.querySelector('.success-message');
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            document.body.appendChild(successMessage);
        }
    
        successMessage.textContent = message;
        successMessage.classList.add('active');
    
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 3000);
    }


    renderFoodCard(food) {
        return `
            <div class="food-card">
                <div class="food-card-img">
                    <img src="${food.image}" alt="${food.name}">
                </div>
                <div class="food-card-body">
                    <h3 class="food-card-title">${food.name}</h3>
                    <p class="food-card-description">${food.description}</p>
                    <div class="food-card-footer">
                        <div class="food-card-price">$${food.price.toFixed(2)}</div>
                        <button class="btn btn-primary btn-small add-to-cart" data-id="${food.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }


    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.add-to-cart')) {
                const foodId = parseInt(e.target.getAttribute('data-id'));
                this.addItem(foodId);
            }
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    window.cartManager = new CartManager();
  
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
  
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }
  
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
            }
        });
    });
});

