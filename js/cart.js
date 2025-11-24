document.addEventListener('DOMContentLoaded', function() {
    const cartManager = window.cartManager;
    const cartItems = document.getElementById('cartItems');

    function renderCart() {
        if (cartManager.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <h3>Your cart is empty</h3>
                    <p>Add some delicious food to get started!</p>
                    <a href="menu.html" class="btn btn-primary mt-3">Browse Menu</a>
                </div>
            `;
            updateSummary(0);
            return;
        }
    
        cartItems.innerHTML = cartManager.cart.map(item => `
            <div class="horizontal-food-card">
                <div class="horizontal-food-card-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="horizontal-food-card-body">
                    <h3 class="food-card-title">${item.name}</h3>
                    <div class="horizontal-food-card-footer">
                        <div class="food-card-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                            <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                        </div>
                        <button class="btn btn-secondary btn-small remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    
        updateSummary(cartManager.getSubtotal());
    
        
        document.querySelectorAll('.decrease-quantity').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                cartManager.updateQuantity(itemId, -1);
                renderCart();
            });
        });
    
        document.querySelectorAll('.increase-quantity').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                cartManager.updateQuantity(itemId, 1);
                renderCart();
            });
        });
    
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                cartManager.removeItem(itemId);
                renderCart();
            });
        });
    }

    function updateSummary(subtotal) {
        const deliveryFee = 2.99;
        const tax = subtotal * 0.08;
        const total = subtotal + deliveryFee + tax;
    
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    
    renderCart();
});

