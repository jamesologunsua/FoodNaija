FoodNaija - Food Delivery App 
A complete food ordering application built with HTML, CSS, and JavaScript that provides a seamless food delivery experience.

📱 Live Demo
View Live Application: https://jamesologunsua.github.io/FoodNaija/

✨ Features
 Core Features
Browse Restaurants & Menus - Explore various restaurants and their menus

Smart Search & Filter - Find food by name, category, or price range

Shopping Cart - Add items with quantity control

Secure Checkout - Complete order process

User Profiles - Personal accounts with order history

Responsive Design - Flawless experience on all devices

🎯 Advanced Features
Real-time Cart Updates - Instant cart calculations

Local Storage - Persistent cart between sessions

Mobile-First Design - Optimized for mobile devices

Fast Performance - Lightweight and fast loading

Accessibility - WCAG compliant design

🏗️ Project Structure
text
foodnaija-app/
├── index.html              # Homepage
├── menu.html               # Restaurant menu
├── cart.html               # Shopping cart
├── checkout.html           # Checkout process
├── profile.html            # User profile
├── orders.html             # Order history
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   ├── style.css           # Main stylesheet
│   ├── components.css      # Reusable components
│   └── responsive.css      # Responsive styles
├── js/
│   ├── app.js              # Shared functionality
│   ├── cart.js             # Cart management
│   ├── menu.js             # Menu interactions
│   └── auth.js             # User authentication
├── images/                 # All images and icons
└── assets/                 # Additional assets
🚀 Quick Start
Prerequisites
Modern web browser (Chrome, Firefox, Safari, Edge)

Local server (for development)

Installation
Clone the repository

bash
git clone https://github.com/jamesologunsua/FoodNaija.git
cd foodnaija-app
Run locally

Option 1: Open index.html directly in your browser

Option 2: Use a local server:

bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
Access the application

Open http://localhost:8000 in your browser

💻 Technologies Used
Frontend: HTML5, CSS3, JavaScript (ES6+)

Styling: CSS Grid, Flexbox, CSS Variables

Storage: localStorage API

Icons: Custom SVG icons

Fonts: Google Fonts (Montserrat, Open Sans)

🎨 Design System
Color Palette
css
--primary-color: #ff6b6b;     /* Brand red */
--secondary-color: #4ecdc4;   /* Teal accent */
--accent-color: #ffd166;      /* Yellow accent */
--dark-color: #2d3047;        /* Dark blue */
--light-color: #f8f9fa;       /* Light background */
Typography
Headings: Montserrat (Bold, Semi-bold)

Body: Open Sans (Regular, Light)

Code: Fira Code (Monospace)

🔧 Key Features Explained
Cart Management
javascript
class CartManager {
    constructor() {
        this.cart = this.loadCart();
    }
    
    addItem(item) {
        // Add item to cart with quantity control
    }
    
    updateQuantity(itemId, quantity) {
        // Update item quantity
    }
    
    calculateTotal() {
        // Real-time total calculation
    }
}
Responsive Design
Mobile First approach

Breakpoints: 768px (tablet), 1024px (desktop)

Touch-friendly interface elements

Optimized images for different screen sizes

Data Persistence
localStorage for cart data

Session management for user preferences

Offline capability for basic functionality

📱 Browser Support
Browser	Version	Support
Chrome	60+	✅ Full
Firefox	55+	✅ Full
Safari	12+	✅ Full
Edge	79+	✅ Full
Mobile Safari	12+	✅ Full
Chrome Mobile	60+	✅ Full
🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

<strong>Development Guidelines</strong> 

Follow mobile-first responsive design

Use semantic HTML5 elements

Maintain accessibility standards

Write clean, documented JavaScript

Test across multiple browsers

🐛 Bug Reports
If you discover any bugs, please create an issue with:

Browser and version

Steps to reproduce

Expected vs actual behavior

Screenshots if applicable

📋 TODO & Roadmap
Short Term
User authentication system

Favorite items functionality

Order tracking interface

Payment integration mockup

Medium Term
Backend API integration

Real-time order updates

Push notifications

Advanced search filters

Long Term
Progressive Web App (PWA)

Mobile app (React Native)

AI recommendations

Multi-vendor support


📊 SEO Optimization
Semantic HTML structure

Meta tags and descriptions

Open Graph tags for social sharing

Clean URL structure

Fast loading times

👥 Team
This project was developed by a team of 5 developers:
Ayomide Ologunsua
Sunday Olawumi Oladele
Toritseju Odeka
Ekpe Lillian Francis 
Abraham Lawal


🙏 Acknowledgments
Icons from Font Awesome

Fonts from Google Fonts

Inspiration from modern food delivery apps

Our amazing beta testers and users

📞 Support
For support, email jamesologunsua@gmail.com.

<div align="center">
Made with ❤️ by the FoodNaija Labs Team
Experience the future of food delivery today! 🚀

View Demo ·
Report Bug ·
Request Feature

</div>
