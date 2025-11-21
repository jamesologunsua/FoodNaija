class FoodItem {
    constructor(name, price, category, description = '') {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
    showDetails() {
        return `${this.name} (${this.category}): $${this.price.toFixed(2)} - ${this.description}`; 
    }
}

class Menu {
    constructor() {
        this.items = {
            breakfast: [yam & egg, moi-moi, scrambled-egg & bread, akara & pap ],
            lunch: [Jollof-rice, beans & plantain, egusi-soup & pounded-yam/eba, fried-rice],
            dinner:[Amala & ewedu, semo & egusi-soup, Fufu & okro-soup, jollof-rice, fried-rice],
            dessert:[fruitsalad, cake, ice-cream, custard, cookies, pies, doughnut, popcorn ],
            drinks:[smoothie, chivita, berryblast, coke, fanta, sprite, zobo, kunu],
        }
    }
}

addItem(FoodItem, quantitymethod) 
{
    this.item[FoodItem]= quantitymethod
} 

removeItem(FoodItem)
 {
    this.item[FoodItem]= this.items[FoodItem]-quantity
}
rendercart ()

function updateQuantity(FoodItem, quantitymethod) {
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = newQuantity;
    // Optionally, remove item if newQuantity is 0 or less
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay(); // Re-render the cart in HTML
    calculateCartTotal(); // Recalculate and display total
  }
}


displayMenu()
 {
        for (const category in this.items) {
            console.log(`\n--- ${category.charAt(0).toUpperCase() + category.slice(1)} ---`);
            if (this.items[category].length === 0) {
                console.log("No items available.");
            } else {
                this.items[category].forEach(item => console.log(item.displayDetails()));
            }
        }
    }

    function calculateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}

